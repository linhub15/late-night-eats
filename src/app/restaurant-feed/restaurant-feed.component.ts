import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-restaurant-feed',
  templateUrl: './restaurant-feed.component.html',
  styleUrls: ['./restaurant-feed.component.scss']
})
export class RestaurantFeedComponent implements OnInit {

  @ViewChild('map', { static: true }) mapElement: any;

  time = new Date();
  location: google.maps.LatLng;
  map: google.maps.Map;

  constructor() {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        const mapProp: google.maps.MapOptions = {
          center: this.location,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true

        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
        this.setMarker(this.location);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  setMarker(location: google.maps.LatLng) {
    new google.maps.Marker({
      position: location,
      map: this.map
    });
  }
}
