import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuService } from '../services/menu.service';
import { Menu } from '../beans/menu';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  menu: Menu = new Menu();
  location;
  lat;
  lng;

  constructor(
    private http: HttpClient,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.currentMenu.subscribe((currentMenu) => {
      if (currentMenu) {
        this.menu = currentMenu;
        let addrRq = this.menu.address.split(' ').join('+');
        let request = `https://maps.googleapis.com/maps/api/geocode/json?address=${addrRq}&key=AIzaSyDAtZMeI4ccqiBCXL1kyHeObzY6WhYxymU`;
        // console.log(request);
        this.http.get(request).subscribe((coord) => {
          this.location = coord;
          this.lat = this.location.results[0].geometry.location.lat;
          this.lng = this.location.results[0].geometry.location.lng;
        });
      }
    });
    if (localStorage.getItem('menu')) {
      this.menu = JSON.parse(localStorage.getItem('menu'));
      let addrRq = this.menu.address.split(' ').join('+');
      let request = `https://maps.googleapis.com/maps/api/geocode/json?address=${addrRq}&key=AIzaSyDAtZMeI4ccqiBCXL1kyHeObzY6WhYxymU`;
      // console.log(request);
      this.http.get(request).subscribe((coord) => {
        this.location = coord;
        this.lat = this.location.results[0].geometry.location.lat;
        this.lng = this.location.results[0].geometry.location.lng;
      });
    }
  }

}
