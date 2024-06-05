import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
  
      if (!value) {
        return null;
      }
  
      const errors: ValidationErrors = {};
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const minLength = value.length >= 8;
  
      if (!hasUpperCase) {
        errors['uppercase'] = true;
      }
  
      if (!hasLowerCase) {
        errors['lowercase'] = true;
      }
  
      if (!hasNumeric) {
        errors['numeric'] = true;
      }
  
      if (!minLength) {
        errors['minlength'] = true;
      }
  
      return Object.keys(errors).length ? errors : null;
    };
  }
  