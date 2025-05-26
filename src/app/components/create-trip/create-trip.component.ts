import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
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
  tripForm: UntypedFormGroup = new UntypedFormGroup({
    destination: new UntypedFormControl(''),
    startDate: new UntypedFormControl(''),
    endDate: new UntypedFormControl(''),
    budget: new UntypedFormControl(''),
    noOfDays: new UntypedFormControl(''),
    traveler: new UntypedFormControl(''),
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
