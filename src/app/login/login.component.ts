import { Component, OnInit } from '@angular/core';
import { ILogin } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  login: ILogin = new ILogin();
  loginError: string = "";

  constructor(private loginService: LoginService, private router : Router) 
  {
  
  }


  ngOnInit()
  {
  }


  onLoginClick(event)
  {
    this.loginService.Login(this.login).subscribe(
      (response) => {
        this.router.navigateByUrl("/accueil");
      },
      (error) => {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }

}
