import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { HomeComponent } from './home/home.component';
import { UserTableComponent } from './user-table/user-table.component';

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
        component: UserTableComponent,
        title: 'Users List'
    }
];

export default routeConfig;

