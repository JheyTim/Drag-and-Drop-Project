namespace App {
  //Validation
  export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(validatableInput: Validatable): boolean {
    let isValid = true;
    const value = validatableInput.value;

    if (validatableInput.required) {
      isValid = isValid && value.toString().trim().length !== 0;
    }

    if (typeof value === 'string') {
      if (validatableInput.minLength != null) {
        isValid = isValid && value.length >= validatableInput.minLength;
      }

      if (validatableInput.maxLength != null) {
        isValid = isValid && value.length <= validatableInput.maxLength;
      }
    }

    if (typeof value === 'number') {
      if (validatableInput.min != null) {
        isValid = isValid && value >= validatableInput.min;
      }

      if (validatableInput.max != null) {
        isValid = isValid && value <= validatableInput.max;
      }
    }

    return isValid;
  }
}
