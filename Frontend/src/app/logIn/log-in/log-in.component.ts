import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {
  form: FormGroup;

  email = '';
  password = '';
  
  constructor(private formBuilder: FormBuilder){
    this.form= this.formBuilder.group({
      password:['',[]],
      mail:['',[]]
    })
  }
  

   ngOnInit() {
     
   }
  }

  

