import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password         = control.get('password')?.value;
  const confirmPassword  = control.get('confirmPassword')?.value;

  if (!password || !confirmPassword) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
}



// export const checkEquality = (source: string, target: string) => {
//     return (group: AbstractControl): ValidationErrors | null =>{
//         const sourceVal = group.get(source)?.value;
//         const targetVal = group.get(target)?.value;
//         if (sourceVal !== targetVal) {
//             return {notEqual: true}
//         }
//         return null;
//     }
// }