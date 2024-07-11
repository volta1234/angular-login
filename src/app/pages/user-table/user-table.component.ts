import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users: User[] = [];

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      this.users = JSON.parse(usersData).map((user: User, index: number) => ({
        ...user,
        id: index + 1
      }));
    } else {
      this.users = [];
    }
  }

  trackByUserId(index: number, user: User): number {
    return user.id!;
  }
}
