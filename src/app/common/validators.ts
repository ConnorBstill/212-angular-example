import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minLength(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value.length < length 
      ? { tooShort: { value: control.value } } 
      : null;
  };
}