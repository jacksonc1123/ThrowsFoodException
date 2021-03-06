import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../beans/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { ValidatorUserObj } from '../beans/user-validator';

@Injectable()
export class LoginService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedInAndAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private uas: UserApiService
  ) { }

  isLoggedIn() {
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable().share();
  }

  isLoggedInAndAdmin() {
    let user: User = JSON.parse(localStorage.getItem('currentUser'));
    if (user && user.role == 2) {
      this.loggedInAndAdmin.next(true);
    } else {
      this.loggedInAndAdmin.next(false);
    }
    return this.loggedInAndAdmin.asObservable().share();
  }

  hasEmptyFields(user: User): boolean {
    for (let key in user) {
      if ((user[key] === '') || (user[key] === undefined)) {
        return true;
      }
    }
    return false;
  }

  login(user: User): Observable<User> {
    return this.uas.getUserByUsernameAndPassword(user)
      .map((user) => {
        if (user !== null) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.loggedIn.next(true);
        }
        return user;
      });
  }

  register(user: User): Observable<ValidatorUserObj> {
    return this.uas.updateUser(user).map((validator) => {
      if (validator.user) {
        localStorage.setItem('currentUser', JSON.stringify(validator.user));
        this.loggedIn.next(true);
      }
      return validator;
    })
  }

  update(user: User): Observable<ValidatorUserObj> {
    return this.uas.updateUser(user).map((validator) => {
      if (validator.user) {
        localStorage.setItem('currentUser', JSON.stringify(validator.user));
      }
      return validator;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    window.location.reload();
  }

}
