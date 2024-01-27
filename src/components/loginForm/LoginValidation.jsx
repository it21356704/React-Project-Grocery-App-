export default function LoginValidation(loginValues) {

    const loginErrors = {}

    if(loginValues.Username === "" ) {
        loginErrors.Username = "Name is Required!";
    }

    if(loginValues.Password === "") {
        loginErrors.Password = "Email is Required";
    }

    return loginErrors;
}    