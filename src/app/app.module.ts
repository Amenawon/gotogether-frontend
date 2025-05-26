import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTripModule } from 'src/app/components/create-trip/create-trip.module';
import { CountryService } from './services/country.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, CreateTripModule],
  providers: [CountryService, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
