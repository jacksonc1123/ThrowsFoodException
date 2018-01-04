import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-sidenav',
  templateUrl: './general-sidenav.component.html',
  styleUrls: ['./general-sidenav.component.css']
})
export class GeneralSidenavComponent implements OnInit {

  @Input()
  menu: number;
  
  numItems: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.shoppingCartService.numItems.subscribe((val) => {
      this.numItems = val;
    });
  }

  shoppingCartView() {
    this.router.navigate(['shopping-cart']);
  }

}
