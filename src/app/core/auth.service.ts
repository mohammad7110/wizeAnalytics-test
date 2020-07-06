import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor() {
  }


  isLogin() {
    return JSON.parse(localStorage.getItem('isLogin'));

  }



  getUser() {
    return JSON.parse(localStorage.getItem('user'));

  }
}
