import { Component } from '@angular/core';
import { navLinks } from '../constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  navLinks = navLinks;
}
