const dotEnv = require("dotenv");
dotEnv.config();
const { loginWithEmailPass, loginWithToken, loginWithApiKey } = require('./auth')


const relate = require('./database/relationships');
relate();

// loginWithEmailPass("lamba360@gmail.com", "lamba123").then((res) => console.log(res));

loginWithToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJlbWFpbCI6ImxhbWJhMzYwQGdtYWlsLmNvbSIsImlhdCI6MTY3OTU0MTI4NSwiZXhwIjoxNjc5NTQ0ODg1fQ.ltTqlYqeHsoUgwQy_SxXUBy1bUjRzAsf3_x0Qiu6VPA").then((res) => console.log(res))

// loginWithApiKey('358d3c4d-f2af-466d-a5a1-52e5f150551c').then((res) => console.log(res));
