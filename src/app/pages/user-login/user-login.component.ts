import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  loginForm= new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  })
  

  handleFormSubmit(event:any){

    event.preventDefault();


    console.log("valid",this.loginForm.valid)
    console.log("value",this.loginForm.value);

    //{username:ambrose,password:test@!23}
  }


}
