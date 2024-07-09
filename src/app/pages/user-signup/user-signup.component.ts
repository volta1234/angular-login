import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  username: string = "";
  email: string = "";
  password: string = "";

  signup() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    localStorage.setItem('currentUser', JSON.stringify(user));

    this.username = '';
    this.email = '';
    this.password = '';
    alert('User registered successfully!');
  }
}
