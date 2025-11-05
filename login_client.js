const username = "user_twin";
const password = "pass_123";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";

const SECRET_USE_STRING = '{"username": "user_twin", "password": "pass_123"}';

const USER_DATA = JSON.parse(SECRET_USE_STRING);

function authenticate(user, pass) {
    if (user === USER_DATA.username && pass === USER_DATA.password) {
        return LOGIN_SUCCESS;
    } else {
        return LOGIN_FAILED;
    }
}

const testResult = authenticate("zachary", "pass_123");
console.log('Client Check Result:',testResult);  // Expected output: LOGIN_SUCCESS