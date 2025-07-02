import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripSummary } from 'src/app/model/trip-summary';

@Component({
  selector: 'app-trip-summary',
  templateUrl: './trip-summary.component.html',
  styleUrl: './trip-summary.component.css',
})
export class TripSummaryComponent {
  itinerary!: TripSummary;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const itinerary = JSON.parse(nav?.extras.state?.['itinerary']) as TripSummary;
    this.itinerary = itinerary;
  }
}
