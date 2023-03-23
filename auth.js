const User = require("./database/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

const loginWithEmailPass = async (email, password) => {
  let user = await User.findOne({
    where: {
      emailAddress: email,
    },
  });

  user = user.dataValues;

  console.log(email, password);
  if (!user) {
    return { status: 401 };
  } else {
    const match = await bcrypt.compare(password, user.password);
    console.log(3);
    if (!match) {
      return { status: 401 };
    } else {
      console.log(4);
      const token = jwt.sign({ user_id: user.id, email }, JWT_PRIVATE_KEY, {
        expiresIn: 60 * 60,
      });
      return { user, token };
    }
  }
};

const loginWithToken = async (token) => {
  if (!token) {
    return { status: 401 };
  }
  try {
    const user_token = jwt.verify(token, JWT_PRIVATE_KEY);
    console.log(user_token)
    let user = await User.findByPk(user_token.user_id);
    console.log(4);
    user = user.dataValues
    if (!user) {
      console.log(10);
      return { status: 401 };
    } else {
      console.log(5);
      return user;
    }
  } catch (e) {
    return { status: 401 };
  }
};

const loginWithApiKey = async (apiKey) => {
  let user = await User.findOne({
    where: {
      apiKey: apiKey,
    },
  });
  user = user.dataValues;
  if (!user) {
    return { status: 401 };
  }
  return user;
};

module.exports = {
  loginWithEmailPass,
  loginWithToken,
  loginWithApiKey,
};
