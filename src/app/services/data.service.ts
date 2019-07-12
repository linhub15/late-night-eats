import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  public data$: Observable<any>;
  constructor(private http: HttpClient) {
    this.data$ = this.http.get('./assets/restaurants.json');
  }

}
