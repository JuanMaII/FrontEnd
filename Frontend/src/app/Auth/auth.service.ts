import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url= 'http://localhost:3000/api';
  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', {email: email, password: password}).subscribe((resp:any) => {this.router.navigate(['profile'])});
    localStorage.setItem('auth_token', this.token);
   
  }

  logout () {
    localStorage.removeItem('token');
  }
public get logIn (): boolean {
  return(localStorage.getItem('token') !== null);
}

isLoggedIn(){
  const token = localStorage.getItem('token');
  const payload = ('.') [1];
  const parsedPayload = JSON.parse(payload);

  return parsedPayload.exp > Date.now()/1000;
}
}


