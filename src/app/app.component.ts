import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RRDist';
  isLoggedIn:boolean=false;
  public showHead:boolean=true;
  constructor(
    private router: Router
  ){

    
    // on route change to '/login', set the variable showHead to false /otp
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/Login') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
     
  }
  
}