import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { provideRouter} from '@angular/router';
import routeConfig from './app/app.routes';
import { UserSignupComponent } from './app/user-signup/user-signup.component';

bootstrapApplication(UserSignupComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
})
  .catch((err) => console.error(err));