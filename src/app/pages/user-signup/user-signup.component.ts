import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  userSignup: signUp = new signUp();
}

export class signUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;


  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
  }
}
