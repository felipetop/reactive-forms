import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function compareStringValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const controlToCompare = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (!controlToCompare || !matchingControl) {
      return null;
    }

    return controlToCompare.value === matchingControl.value ? null : { stringMismatch: true };
  };
}
