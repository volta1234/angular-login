import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

 @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterModule],
    templateUrl: './user-signup.component.html',
    styleUrl: './user-signup.component.css'
  })
  export class UserSignupComponent {
    title = 'login';
  }
