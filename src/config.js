export function getRegistrationKey() {
  return localStorage.getItem('registration_key');
}

export function getHost() {
  return process.env.REACT_APP_REGISTRAION_API_HOST ?? 'http://localhost:8081';
}

export function getAppInfo() {
  return {
    version: process.env.REACT_APP_VERSION ?? '0.0.0',
    name: process.env.REACT_APP_NAME ?? 'App',
  }
}

export function setRegistrationKey(registrationKey) {
  localStorage.setItem('registration_key', registrationKey);
}
