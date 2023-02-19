import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/Auth/auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

  email = '';
  password = '';
  
  constructor(private authService: AuthService){}
  
  Login (){
    this.authService.login(this.email, this.password)
   }

   ngOnInit(): void {
     
   }
  }

  

