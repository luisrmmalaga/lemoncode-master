import { Injectable, signal, WritableSignal } from '@angular/core';
import { User } from './users.model';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private readonly validUserCredentials: User = {
  //   username: 'master@lemoncode.net',
  //   password: '12345678',
  // };

  private readonly validUserCredentials: User = {
    username: 'curso',
    password: 'angular',
  };

  private readonly sessionState: WritableSignal<Partial<User> | undefined> =
    signal(undefined);

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.sessionState.set(JSON.parse(user));
    }
  }

  login(user: User): Observable<boolean> {
    const validCredentials = this.validCredentials(user);

    return of(validCredentials).pipe(
      delay(2000),
      tap((validCredentials) => {
        if (validCredentials) {
          localStorage.setItem(
            'user',
            JSON.stringify({ username: user.username })
          );
          this.sessionState.set(user);
        }
      })
    );
  }

  logout(): void {
    this.sessionState.set(undefined);
    localStorage.removeItem('user');
  }

  isLogged(): boolean {
    return this.sessionState() !== undefined;
  }

  getUsername(): string {
    return this.sessionState()?.username ?? '';
  }

  private validCredentials({ username, password }: User): boolean {
    return (
      this.validUserCredentials.username === username &&
      this.validUserCredentials.password === password
    );
  }
}
