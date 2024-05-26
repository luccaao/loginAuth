import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../shared/Usuario.model';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly API = 'http://localhost:3000/users';

  public userAuthenticated: boolean = false;

  private emitirUsuarioSource = new ReplaySubject<Usuario>(1);
  emitirUsuario = this.emitirUsuarioSource.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  getAllUsers() {
    return this.httpClient.get(`${this.API}`);
  }

  authenticateUser() {
    if (this.userAuthenticated) {
      return (this.userAuthenticated = true);
    } else {
      return (this.userAuthenticated = false);
    }
  }

  fazerLogin(usuario: Usuario) {
    this.getAllUsers().subscribe((data: any) => {
      if (
        data.find(
          (user: Usuario) =>
            user.email == usuario.email && user.senha == usuario.senha
        )
      ) {
        this.emitirUsuarioSource.next(usuario);

        alert('Usuário logado');

        this.userAuthenticated = true;

        const token =
          Math.random().toString(36).substring(2) +
          Math.random().toString(36).substring(2);
        this.router.navigate(['home']);

        localStorage.setItem('token', token);
      } else {
        alert('Usuário não encontrado');
      }
    });
  }
}
