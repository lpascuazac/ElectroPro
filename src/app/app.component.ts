import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state => {
        console.log("State:" + state);
        if (state) {
          console.log("State if:" + state);
          this.router.navigate(['']);
        } else {
          console.log("State else:" + state);
          this.router.navigate(['login']);
        }
      });
    });

    /*this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });*/

  }
}
