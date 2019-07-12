import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-restaurant-feed',
  templateUrl: './restaurant-feed.component.html',
  styleUrls: ['./restaurant-feed.component.scss']
})
export class RestaurantFeedComponent implements OnInit {

  @ViewChild('map', { static: true }) mapElement: any;
  @ViewChild('placesList', {static: true}) places: any;

  time = new Date();
  location: google.maps.LatLng;
  map: google.maps.Map;

  tempData: any;

  private _placeService: google.maps.places.PlacesService;

  constructor(private data: DataService) {}

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
        this._placeService = new google.maps.places.PlacesService(this.map);
        this.setMarker(this.location);
        this.findPlace();
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
    this.data.data$.subscribe(data => {
      this.tempData = data;
    });
    
  }

  setMarker(location: google.maps.LatLng) {
    new google.maps.Marker({
      position: location,
      map: this.map
    });
  }

  findPlace() {
    const request: google.maps.places.PlaceSearchRequest = {
      location: this.location,
      radius: 500,
      type: 'restaurant'
    }
    this._placeService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i=0; i < results.length; i++) {
          this.createMarkers(results);
        }
      }
    });
  }

  createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
  
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
  
      var marker = new google.maps.Marker({
        map: this.map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });
  
      var li = document.createElement('li');
      li.textContent = place.name;
      this.places = li;
  
      bounds.extend(place.geometry.location);
    }
    this.map.fitBounds(bounds);
  }

}
