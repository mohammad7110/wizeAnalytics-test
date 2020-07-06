import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordStrengthValidator } from 'src/app/core/password-strenght-validator';
import { MustMatch } from 'src/app/core/password-match.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router, private toastr: ToastrService

  ) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(128),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, PasswordStrengthValidator]),
      confirmPassword: new FormControl('', [Validators.required])
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }



  register() {
    const user = this.form.value;
    delete user.confirmPassword;
    localStorage.setItem('user', JSON.stringify(user));
    this.toastr.success('', 'Accounted created!');

    this.router.navigate(['auth/login']);
  }




}


