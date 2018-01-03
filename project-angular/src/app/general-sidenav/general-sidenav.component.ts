import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-general-sidenav',
  templateUrl: './general-sidenav.component.html',
  styleUrls: ['./general-sidenav.component.css']
})
export class GeneralSidenavComponent implements OnInit {

  numItems: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

}
