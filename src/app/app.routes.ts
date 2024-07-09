import { Routes } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';
import { HomeComponent } from './pages/home/home.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthGuard } from './guards/auth.guard';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'signup',
        component: UserSignupComponent,
        title: 'SignUp Page'
    },
    {
        path: 'login',
        component: UserLoginComponent,
        title: 'Login Page'
    },
    {
        path: 'user-table',
        component: UserTableComponent, canActivate: [AuthGuard],
        title: 'Users List'
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'Reset Password'
    }
];

export default routeConfig;

