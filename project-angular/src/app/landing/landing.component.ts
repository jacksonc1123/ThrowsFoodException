import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @Input()
  menu: number;

  aboutUs: string = `We've been in the pizza making game for years. No other pizza parlor can compare to us. Come on down and see for yourself,
  the marvels of the Pizza Joint.`

  phone: string = '1-800-GET-FOOD';
  address: string = '2714 E Bearss Ave Tampa, FL 33613';
  operation = [
    {day: "Sunday", hours: "5pm - 10pm"},
    {day: "Monday", hours: "5pm - 10pm"},
    {day: "Tuesday", hours: "5pm - 10pm"},
    {day: "Wednesday", hours: "5pm - 10pm"},
    {day: "Thursday", hours: "5pm - 10pm"},
    {day: "Friday", hours: "5pm - 10pm"},
    {day: "Saturday", hours: "5pm - 10pm"}
  ];
  location;
  lat;
  lng;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    let addrRq = this.address.split(' ').join('+');
    let request = `https://maps.googleapis.com/maps/api/geocode/json?address=${addrRq}&key=AIzaSyDAtZMeI4ccqiBCXL1kyHeObzY6WhYxymU`;
    // console.log(request);
    this.http.get(request).subscribe((coord) => {
      this.location = coord;
      this.lat = this.location.results[0].geometry.location.lat;
      this.lng = this.location.results[0].geometry.location.lng;
      // console.log(this.location.results[0].geometry.location);
    });
  }

}
