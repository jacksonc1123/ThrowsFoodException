import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  aboutUs: string = `We've been in the pizza making game for years. No other pizza parlor can compare to us. Come on down and see for yourself,
  the marvels of the Pizza Joint.`

  constructor() { }

  ngOnInit() {
  }

}
