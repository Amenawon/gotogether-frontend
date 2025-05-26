import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTripModule } from 'src/app/components/create-trip/create-trip.module';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CreateTripModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
