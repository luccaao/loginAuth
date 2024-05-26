
import { HttpClient } from '@angular/common/http';
import { LoginService } from './../../services/login.service';

import { Component, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { Usuario } from '../../shared/Usuario.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  formLogin  = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  



  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      
      this.router.navigate(['']);
    } else {
      
      this.router.navigate(['home']);
    }
  }

  login() {
     this.loginService.fazerLogin(this.formLogin.value as Usuario);
     
    
  }
}
