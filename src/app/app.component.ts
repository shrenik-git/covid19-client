import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid19 - Dashboard';

  constructor(public router: Router) {

    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

      } // if

    }); // subscribe

  } // constructor

} // AppComponent
