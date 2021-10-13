export function getRegistrationKey() {
    return localStorage.getItem("registration_key");
}

export function getHost() {
    return process.env.REACT_APP_REGISTRAION_API_HOST ?? "http://localhost:8081";
}

export function setRegistrationKey(registrationKey) {
    localStorage.setItem("registration_key", registrationKey);
}