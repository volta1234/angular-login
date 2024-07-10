import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'loggedIn';
  private loggedIn = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loggedIn = localStorage.getItem(this.localStorageKey) === 'true';
    }
  }

  login() {
    if (isPlatformBrowser(this.platformId)) {
      this.loggedIn = true;
      localStorage.setItem(this.localStorageKey, 'true');
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      this.loggedIn = false;
      localStorage.removeItem(this.localStorageKey);
    }
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
