import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../beans/user';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Wizard } from 'clarity-angular';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  @Input()
  currentUser: User;

  createMenuWizard: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  profileView() {
    this.router.navigate(['confirm-profile']);
  }

  toggleCreateMenu() {
    this.createMenuWizard = !this.createMenuWizard;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['landing']);
  }

}
