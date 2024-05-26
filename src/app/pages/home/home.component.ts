import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/Usuario.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  // ...

  usuarioAtual : Usuario = {email: '', senha: ''};

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['home']);

      this.loginService.emitirUsuario.subscribe(usuario => 
        this.usuarioAtual = usuario
       );
    
  }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
