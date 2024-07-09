import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [FormsModule, RouterOutlet, RouterModule, AppComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  title="Volta Dynamic"
}