import { handleError } from './handleError';
import { Message } from 'constants/Message';

export default class Validator {
  static #validate(condition, errorMsg) {
    if (condition) {
      return true;
    }

    return handleError(errorMsg);
  }

  static isValidEmail(value) {
    return this.#validate(
      this.hasEmailAtSign(value),
      Message.error.invalidEmail,
    );
  }

  static isValidPassword(value) {
    return this.#validate(
      this.hasPasswordMinimumLength(value),
      Message.error.invalidPassword,
    );
  }

  static hasEmailAtSign(value) {
    return value.includes('@');
  }

  static hasPasswordMinimumLength(value) {
    return value.length >= 8;
  }
}
