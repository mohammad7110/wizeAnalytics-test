import { AbstractControl, ValidationErrors } from '@angular/forms';

export const PasswordStrengthValidator = (control: AbstractControl): ValidationErrors | null => {

    const value: string = control.value || '';

    if (!value) {
        return null;
    }
    if (value.length < 8) {
        return { passwordStrength: 'password must at least 8 character' };
    }

    const upperCaseCharacters = /[A-Z]+/g;
    if (upperCaseCharacters.test(value) === false) {
        return { passwordStrength: `password has to contine Upper case characters` };
    }

    const lowerCaseCharacters = /[a-z]+/g;
    if (lowerCaseCharacters.test(value) === false) {
        return { passwordStrength: `password has to contine lower case characters` };
    }


    const numberCharacters = /[0-9]+/g;
    if (numberCharacters.test(value) === false) {
        return { passwordStrength: `password has to contine number characters` };
    }
    return null;
}
