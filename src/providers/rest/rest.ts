import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import { Response } from '@angular/http';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  public apiUrl = 'http://localhost:57896/api/';

  public emailValid: string;

  constructor(public http: Http) {
  }

  createUsuario(email: string, senha: string, nome: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        senha: senha,
        nome: nome
      };

      this.http.post(this.apiUrl + 'usuarios/create', data)
        .subscribe((result: any) => {
          resolve(result.json())
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  login(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        senha: senha
      };

      this.http.post(this.apiUrl + 'usuarios/valida', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
          this.emailValid = null;
        })
    });
  }

  getUser(email: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email
      };

      this.http.post(this.apiUrl + 'usuarios/getEmail', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  updateUser(user: any) {
    return new Promise((resolve, reject) => {

      for (var i = 0; i < user.length; i++) {
        var data = {
          "email": user[0],
          "senha": user[1],
          "nome": user[2],
          "emailOld": user[3]
        }
      }

      this.http.put(this.apiUrl + 'usuarios/update', data)
        .subscribe((result: any) => {
          resolve(result.json())
          this.emailValid = result.email;
        },
        (error) => {
          reject(error.json());
        })
    });
  }

}
