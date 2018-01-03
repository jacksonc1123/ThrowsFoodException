import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  aboutUs: string = `We've been in the pizza making game for years. No other pizza parlor can compare to us. Come on down and see for yourself,
  the marvels of the Pizza Joint.`

  phone: string = '1-800-GET-FOOD';
  address: string = 'Address: 2714 E Bearss Ave Tampa, FL 33613';
  operation = [
    {day: "Sunday", hours: "5pm - 10pm"},
    {day: "Monday", hours: "5pm - 10pm"},
    {day: "Tuesday", hours: "5pm - 10pm"},
    {day: "Wednesday", hours: "5pm - 10pm"},
    {day: "Thursday", hours: "5pm - 10pm"},
    {day: "Friday", hours: "5pm - 10pm"},
    {day: "Saturday", hours: "5pm - 10pm"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
