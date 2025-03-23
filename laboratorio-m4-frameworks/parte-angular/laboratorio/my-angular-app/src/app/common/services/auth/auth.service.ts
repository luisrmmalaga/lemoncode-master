import { Injectable, signal, WritableSignal } from '@angular/core';
import { User } from './users.model';

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

  private readonly sessionState: WritableSignal<User | undefined> =
    signal(undefined);

  constructor() {}

  login(user: User): boolean {
    const validCredentials = this.validCredentials(user);

    if (validCredentials) {
      this.sessionState.set(user);
    }

    return validCredentials;
  }

  logout(): void {
    this.sessionState.set(undefined);
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
