import { Component, OnInit, Output, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../beans/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  branding: string = 'Pizza Joint';

  currentUser: User;
  isLoggedIn: boolean;
  admin: boolean = false;

  constructor(
    private loginService: LoginService,
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
  }

  ngOnInit() {
  }
  
}
