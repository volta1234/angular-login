import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
// import { UserSignupComponent } from './user-signup/user-signup.component';

const routeConfig: Routes = [
    // {
    //     path: '',
    //     component: UserSignupComponent,
    //     title: 'SignUp Page'
    // },
    {
        path: 'user-login',
        component: UserLoginComponent,
        title: 'Login Page'
    }
];

export default routeConfig;

