import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { routerAnimation } from './app.animations';

import { NavGroup, NavItem } from '../../../go-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerAnimation]
})
export class AppComponent {
  date: Date = new Date();


  constructor (router: Router) { }

  getRouteAnimation(outlet: any): void {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
