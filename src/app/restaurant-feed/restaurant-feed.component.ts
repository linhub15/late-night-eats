import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-feed',
  templateUrl: './restaurant-feed.component.html',
  styleUrls: ['./restaurant-feed.component.scss']
})
export class RestaurantFeedComponent implements OnInit {
  public time = new Date();
  public longitude;
  public latitude;

  constructor() {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
    })
  }
}
