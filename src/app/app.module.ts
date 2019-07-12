import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatComponentModule } from './mat-component.module';
import { RestaurantFeedComponent } from './restaurant-feed/restaurant-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, RestaurantFeedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatComponentModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
