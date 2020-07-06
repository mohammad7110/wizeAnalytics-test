import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
    return { passwordStrength: `text has to contine Upper case characters,current value ${value}` };
  }

  const lowerCaseCharacters = /[a-z]+/g;
  if (lowerCaseCharacters.test(value) === false) {
    return { passwordStrength: `text has to contine lower case characters,current value ${value}` };
  }


  const numberCharacters = /[0-9]+/g;
  if (numberCharacters.test(value) === false) {
    return { passwordStrength: `text has to contine number characters,current value ${value}` };
  }
  return null;
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public form: FormGroup;


  // public userForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.maxLength(128),
  //   Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  //   password: new FormControl('', [Validators.required, PasswordStrengthValidator]),
  //   confirmPassword: new FormControl('', [Validators.required])
  // }, {
  //   validators: this.password.bind(this)
  // });

  constructor(public formBuilder: FormBuilder, private router: Router

  ) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(128),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, PasswordStrengthValidator]),
      confirmPassword: new FormControl('', [Validators.required])
    },
      // {
      //   validators: ConfirmedValidator('password', 'confirmPassword')
      // }
    );
  }



  register() {
    console.log(this.form.value);
    const user = this.form.value;
    delete user.confirmPassword;
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['auth/login']);
  }




}


