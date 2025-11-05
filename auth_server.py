submitted_username = "user_twin"
submitted_password = "pass_123"

USER_DATABASE = {
    "username": "user_twin",
    "password": "pass_123"
}

def authenticate(username, password):
    if username == USER_DATABASE["username"] and password == USER_DATABASE["password"]:
        return "HTTP 200: User Authenticated."
    else:
        return "HTTP 401: Invalid Credentials."
print(authenticate("user_twin", "pass_123"))