import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [FormsModule, RouterOutlet, RouterModule, AppComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService) { }
  loading: boolean = false

  logout() {
    this.loading = true;

    setTimeout(() => {
      this.authService.logout();
      this.loading=false
    }, 3000)
  }

  title = "Volta Dynamic"
}