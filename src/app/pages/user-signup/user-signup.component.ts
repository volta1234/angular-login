import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  userSignup: signUp = new signUp();

  onSubmit() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some((user: any) => user.email === this.userSignup.email)) {
      alert('This email is already registered. please Login to continue.');
      return;
    }

    users.push(this.userSignup);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Welcome to volta Dynamics, proceed to Login.');
  }
}

export class signUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }
}
