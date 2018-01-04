import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../beans/menu';

@Injectable()
export class MenuService {

  menu: BehaviorSubject<Menu> = new BehaviorSubject<Menu>(null);
  currentMenu: Observable<Menu> = this.menu.asObservable();

  constructor() { }

  changeMenu(menu) {
    this.menu.next(menu);
  }

}
