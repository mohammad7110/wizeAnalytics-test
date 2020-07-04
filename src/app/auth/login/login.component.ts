import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;



  constructor(public formBuilder: FormBuilder, private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(128),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.router.navigate(['']);

  }


  goRegister() {
    this.router.navigate(['auth/register']);

  }
}
