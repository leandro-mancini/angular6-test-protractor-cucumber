import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const CORRECT_USERNAME = 'test';
const CORRECT_PASSWORD = '123';
const TOKEN = 'abcdef123';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authorize(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {

      setTimeout(() => {
        if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
          localStorage.setItem('token', TOKEN);

          observer.next(true);
          observer.complete();
        } else {
          observer.error('Usuário ou senha incorretos');
          observer.complete();
        }
      }, 600);

    });
  }

  unauthorize() {
    localStorage.removeItem('token');
  }

  isAuthorized() {
    return !!localStorage.getItem('token');
  }
}
