import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Country } from 'src/app/model/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css'],
})
export class CreateTripComponent implements OnInit {
  destinations: Country[] = [];

  travelPreferences = [
    { title: 'Just me', icon: '✈️', desc: 'A solo travelers option' },
    { title: 'A couple', icon: '🥂', desc: 'Two travellers' },
    { title: 'Family', icon: '🏡', desc: 'A family group' },
    { title: 'Friends', icon: '👯‍♂️', desc: 'A group of friends' },
  ];
  loading = false;
  tripForm: FormGroup = new FormGroup({
    destination: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    budget: new FormControl(''),
    noOfDays: new FormControl(''),
    traveler: new FormControl(''),
  });
  budgetOptions = [
    { title: 'Economy', icon: '💰', desc: 'Budget-friendly options' },
    { title: 'Standard', icon: '💵', desc: 'Moderate spending' },
    { title: 'Luxury', icon: '💎', desc: 'High-end experiences' },
  ];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.getCountries();
  }
  getCountries() {
    this.countryService.getCountries().subscribe({
      next: (data) => {
        this.destinations = data; 
      },
      error: (err) => {
        console.error('Error fetching countries:', err);
      },
    });
  }

  selectDestination(country: string, $event: any) {
    throw new Error('Method not implemented.');
  }
  onDestinationInput($event: any) {
    throw new Error('Method not implemented.');
  }
  onLocationSelect($event: Event) {
    throw new Error('Method not implemented.');
  }
  generateTrip() {
    throw new Error('Method not implemented.');
  }
}
