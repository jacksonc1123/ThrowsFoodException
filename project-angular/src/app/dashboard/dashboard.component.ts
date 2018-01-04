import { Component, OnInit, Output, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../beans/user';
import { Router } from '@angular/router';
import { Menu } from '../beans/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  branding: string = 'EagReats';

  currentUser: User;
  isLoggedIn: boolean;
  admin: boolean = false;
  menu: Menu;

  constructor(
    private loginService: LoginService,
    private menuService: MenuService,
    private router: Router
  ) {
    this.loginService.isLoggedIn().subscribe((loggedIn) => {
      if (loggedIn) {
        this.isLoggedIn = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser.role == 2) {
          this.admin = true;
        }
      }
    });

    this.menuService.currentMenu.subscribe((currentMenu) => {
      if (currentMenu) {
        this.menu = currentMenu;
        this.branding = currentMenu.name;
      }
    });

    if (localStorage.getItem('menu')) {
      this.menu = JSON.parse(localStorage.getItem('menu'));
      this.branding = this.menu.name;
    }
  }

  ngOnInit() {
  }

}
