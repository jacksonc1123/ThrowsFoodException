import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { TicketLine } from '../beans/ticketline';

@Injectable()
export class ShoppingCartService {

  items: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  numItems = this.items.asObservable();
  ticketLines: TicketLine[];
  totalDishes: number = 0;

  constructor() {
   }

  changeNumItems(val) {
    this.items.next(val);
  }

  getNumItemsFromCart() {
    this.ticketLines = JSON.parse(localStorage.getItem('shoppingCart'));
    if(this.ticketLines) {
      localStorage.setItem("shoppingCart", JSON.stringify(this.ticketLines));
      for (let ticketline of this.ticketLines){
        this.totalDishes += ticketline.quantity;
      }
    }
    this.items.next(this.totalDishes);
  }

}
