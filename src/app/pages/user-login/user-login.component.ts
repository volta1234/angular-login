import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService, modalService: ModalService) { }

  onSubmit(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      if (!this.authService.login(this.email, this.password)) {
        alert("Invalid Email or password");
      }
    }, 2000)
  }

  openResetModal() {
  }
}
