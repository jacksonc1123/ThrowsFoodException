import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {

  menu: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentMenu: Observable<number> = this.menu.asObservable();

  constructor() { }

  changeMenu(id) {
    this.menu.next(id);
  }

}
