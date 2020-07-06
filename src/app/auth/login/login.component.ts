import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;



  constructor(public formBuilder: FormBuilder, private router: Router, private authService: AuthService, private toastr: ToastrService
  ) {

    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(128),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.authService.getUser().email === this.form.value.email) {

      if (this.authService.getUser().password === this.form.value.password) {
        localStorage.setItem('isLogin', JSON.stringify(true));
        this.router.navigate(['']);
      } else {
        this.toastr.error('', 'Wrong password!');

      }
    } else {
      this.toastr.error('', 'Couldn\'t find your Account');
    }


  }


  goRegister() {
    this.router.navigate(['auth/register']);

  }
}
