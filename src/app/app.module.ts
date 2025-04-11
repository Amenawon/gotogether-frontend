import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTripModule } from 'src/app/components/create-trip/create-trip.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateTripModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
