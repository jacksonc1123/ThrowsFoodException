import { Component, OnInit } from '@angular/core';
import { TicketLine } from '../beans/ticketline';
import { Router } from '@angular/router';
import { Ticket } from '../beans/ticket';
import { User } from '../beans/user';
import { TicketService } from '../services/ticket.service';
import { TicketlineService } from '../services/ticketline.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private imageSrc: string = "/assets/empty_cart.png";
  private ticketLines: TicketLine[];
  private ticket: Ticket = new Ticket; // new ticket
  private procTicketline: TicketLine = new TicketLine; // process each ticketline
  private currentUser: User;
  private totalDishes: number;
  private totalPrice: number;

  constructor(private router: Router, private ticketService: TicketService, private ticketlineService: TicketlineService) { }

  ngOnInit() {
    this.ticketLines = JSON.parse(localStorage.getItem("shoppingCart"));
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(this.ticketLines){
      this.ticketlinesInfo();
    }  
  }

  reset() {
    this.ticketLines.splice(0, this.ticketLines.length);
    this.ticketlinesInfo();
    localStorage.removeItem("shoppingCart");
  }

  ticketlinesInfo() {
    if(this.ticketLines) {
      localStorage.setItem("shoppingCart", JSON.stringify(this.ticketLines));
      this.totalDishes = 0;
      this.totalPrice = 0;
      for (var ticketline of this.ticketLines){
        this.totalDishes += ticketline.quantity;
        this.totalPrice += ticketline.quantity * ticketline.dish.price;
      }
    }
  }

  decreQuantity(quantity: number, index: number) {
    if(quantity == 1) {
      // decrease quantity 1 will remove the ticketline
      this.removeTicketline(index);
    } else{
      this.ticketLines[index].quantity --;
      this.ticketlinesInfo();
    }
  }

  increQuantity(quantity: number, index: number) {
    this.ticketLines[index].quantity ++;
    this.ticketlinesInfo();
  }

  removeTicketline(index: number) {
    this.ticketLines.splice(index, 1);
    this.ticketlinesInfo();
  }

  placeOrder() {
    if(this.ticketLines && this.ticketLines.length != 0){
      this.processATicket();
    }
  }

  processATicket() {
    var displayDate = new Date().toLocaleString().toString();
    this.ticket.timeSubmitted = displayDate;
    this.ticket.ticketId = 0;
    this.ticket.total = this.totalPrice;
    this.ticket.user = this.currentUser;
    this.ticketService.submitATicket(this.ticket).subscribe(resp =>{
      if(resp){
        this.ticket = resp;
        this.processATicketline();
        window.alert("Thank You! Your Order Has Been Successfully Completed!");
        this.reset();
        this.router.navigate(['menu']);
      }
    });
  }

  processATicketline() {
    for(var ticketline of this.ticketLines){
      this.procTicketline.ticketLineId = 0;
      this.procTicketline.ticket = this.ticket;
      this.procTicketline.dish = ticketline.dish;
      this.procTicketline.quantity = ticketline.quantity;
      this.ticketlineService.submitATicketline(this.procTicketline).subscribe();
    }
  }

  directMenu() {
    this.router.navigate(['menu']);
  }
}
