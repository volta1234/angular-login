import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let foundUser = users.find((user: any) => user.email === this.email && user.password === this.password);

    if (foundUser) {
      alert('Login successful!');
      this.router.navigate(['/user-table']);
    } else {
      alert('Invalid email or password');
    }
  }
}

