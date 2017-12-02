import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
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
  public treino: string;
  public exercicio: any;
  public evolucao: any;
  public tempo: number;

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];

  constructor(public http: Http) {
  }

  /*#################################################################### Login ##################################################*/

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

  /*#################################################################### Usuário ##################################################*/

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

  /*#################################################################### Ficha de Avaliação ##################################################*/

  createFicha(ficha: any) {
    return new Promise((resolve, reject) => {
      //for (var i = 0; i < 1; i++) {
      var data = {
        "peso": ficha[0],
        "altura": ficha[1],
        "gordura": ficha[2],
        "peito": ficha[3],
        "cintura": ficha[4],
        "quadril": ficha[5],
        'anteBracoDireito': ficha[6],
        "anteBracoEsquerdo": ficha[7],
        "bracoDireito": ficha[8],
        "bracoEsquerdo": ficha[9],
        "coxaDireita": ficha[10],
        "coxaEsquerda": ficha[11],
        "pantuDireita": ficha[12],
        "pantuEsquerda": ficha[13],
        "reavaliacao": ficha[14],
        "email": ficha[15]
      };

      this.http.post(this.apiUrl + 'ficha/create/avaliacao', data)
        .subscribe((result: any) => {
          resolve(result.json())
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  getFicha(email: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email
      };

      this.http.post(this.apiUrl + 'ficha/email', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  getAllFicha(email: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email
      };

      this.http.post(this.apiUrl + 'ficha/all', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  getAllAvaliacao(email: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email
      };

      this.http.post(this.apiUrl + 'avaliacao/all', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  updateFicha(ficha: any) {
    return new Promise((resolve, reject) => {

      var data = {
        "peso": ficha[0],
        "altura": ficha[1],
        "gordura": ficha[2],
        "peito": ficha[3],
        "cintura": ficha[4],
        "quadril": ficha[5],
        'anteBracoDireito': ficha[6],
        "anteBracoEsquerdo": ficha[7],
        "bracoDireito": ficha[8],
        "bracoEsquerdo": ficha[9],
        "coxaDireita": ficha[10],
        "coxaEsquerda": ficha[11],
        "pantuDireita": ficha[12],
        "pantuEsquerda": ficha[13],
        "reavaliacao": ficha[14],
        "email": ficha[15]
      };

      this.http.put(this.apiUrl + 'ficha/update', data)
        .subscribe((result: any) => {
          resolve(result.json())
          //this.emailValid = result.email;
        },
        (error) => {
          reject(error.json());
        })
    });
  }


  /*#################################################################### Treino ##################################################*/

  createTreino(treinos: any) {
    return new Promise((resolve, reject) => {
      var data = {
        "treino": treinos[0],
        "email": treinos[1]
      };

      this.http.post(this.apiUrl + 'treino/create', data)
        .subscribe((result: any) => {
          resolve(result.json())
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  getTreino(email: any) {
    return new Promise((resolve, reject) => {
      var data = {
        "email": email
      };

      this.http.post(this.apiUrl + 'treino/data', data)
        .subscribe((result: any) => {
          resolve(result.json())
        },
        (error) => {
          reject(error.json());
        })
    });
  }


  /*#################################################################### Exercicio ##################################################*/


  createExercicio(exercicios: any) {
    return new Promise((resolve, reject) => {
      var data = {
        "exercicio": exercicios[0],
        "repeticao": exercicios[1],
        "carga": exercicios[2],
        "email": exercicios[3],
        "treino": exercicios[4]
      };

      this.http.post(this.apiUrl + 'evolucaoTreino/create', data)
        .subscribe((result: any) => {
          resolve(result.json())
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  getExercicio(email: any, treino: any) {
    return new Promise((resolve, reject) => {
      var data = {
        "email": email,
        "dsTreino": treino
      };

      this.http.post(this.apiUrl + 'exercicio/email', data)
        .subscribe((result: any) => {
          resolve(result.json())
        },
        (error) => {
          reject(error.json());
        })
    });
  }

  getEvelucao(email: any, evolucao: any) {
    return new Promise((resolve, reject) => {
      var datas = {
        "email": email,
        "exercicio": evolucao
      };

      this.http.post(this.apiUrl + 'evolucao/data', datas)
        .subscribe((result: any) => {
          resolve(result.json())
        },
        (error) => {
          reject(error.json());
        })
    });
  }

}
