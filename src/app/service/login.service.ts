import { Injectable } from '@angular/core';
import { User } from '../service/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() { }


  login(user: User): boolean {
    if (user.email === 'xyz@gmail.com' && user.password === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    return this.isLoggedIn;
  }

}
