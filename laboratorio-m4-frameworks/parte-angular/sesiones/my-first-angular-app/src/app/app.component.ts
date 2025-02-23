import { Component, EventEmitter } from '@angular/core';
import { SearchComponent } from './utils/search/search.component';
import { UserListComponent } from './user/user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [SearchComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-angular-app';

  handleClick($event: string) {
    this.title = $event;
  }
}
