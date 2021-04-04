import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ILogin } from './login';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient ) 
  { 

  }
  currentUserName: string = null;

  public Login(login: ILogin) 
  {
    return this.httpClient.post<any>("", login, { responseType: "json" })
    .pipe(map(user => {
      if(user)
      {
        this.currentUserName = user.name;
      }
      return user;
    }));
  }

  public Logout()
  {
    this.currentUserName = null;
  }
}
