import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

const delay = (delay: number = 1_000) =>
  new Promise((res) => {
    setTimeout(() => {
      res(undefined);
    }, delay);
  });

const memberFactory = () => [{ id: '1', login: 'banana', avatar_url: '' }];

@Component({
  selector: 'app-user-list',
  imports: [JsonPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  members: MemberEntity[] = [];
  loading: boolean = false;

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.loading = true;
    await delay(3000);
    this.members = memberFactory();
    this.loading = false;
  }
}
