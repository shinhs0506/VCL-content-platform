import constants from './constants';

const text = {
  COMMON: {
    SUBMIT: "Submit",
    BACK: "Back",
    NEXT: "Next",
  },

  LOGIN: {
    TITLE: "Member Login",
    USERNAME: "Username",
    USERNAME_EMPTY_ERROR: "Username is required",
    USERNAME_LENGTH_ERROR: `Minimum ${constants.MIN_USERNAME_LENGTH} characters`,
    PASSWORD: "Password",
    PASSWORD_EMPTY_ERROR: "Password is required",
    PASSWORD_LENGTH_ERROR: `Minimum ${constants.MIN_PASSWORD_LENGTH} characters`,
  }
} as const;

export default text;
