import { Component, OnInit } from '@angular/core';
import { User } from '../service/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage: string = '';
  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  login() {
    // if(this.loginservice.login(this.login.user)){
       
    // }
    // this.router.navigate("/dashboard");
    // this.router.navigate(['/dashboard']);
    this.router.navigateByUrl('/dashboard');
    // this.user = new User();

  }


}
