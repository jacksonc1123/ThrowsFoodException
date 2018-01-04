import { Component, OnInit } from '@angular/core';
import { Menu } from '../beans/menu';
import { MenuApiService } from '../services/menu-api.service';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  menus: Menu[];

  constructor(
    private menuApiService: MenuApiService,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuApiService.getAllMenus().subscribe((menus) => {
      this.menus = menus;
    });
  }

  loadRestaurant(menu: Menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
    this.menuService.changeMenu(menu);
    this.router.navigate(['landing']);
  }

}
