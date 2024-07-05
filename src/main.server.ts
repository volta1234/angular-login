import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { UserSignupComponent } from './app/user-signup/user-signup.component';

const bootstrap = () => bootstrapApplication(UserSignupComponent, config);

export default bootstrap;
