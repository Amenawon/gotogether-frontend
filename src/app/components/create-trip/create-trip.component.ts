import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';
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
    destination: new FormControl('',Validators.required),
    budget: new FormControl('',Validators.required),
    noOfDays: new FormControl('',Validators.required),
    traveler: new FormControl('',Validators.required),
  });
  budgetOptions = [
    { title: 'Economy', icon: '💰', desc: 'Budget-friendly options' },
    { title: 'Standard', icon: '💵', desc: 'Moderate spending' },
    { title: 'Luxury', icon: '💎', desc: 'High-end experiences' },
  ];

  search: OperatorFunction<string, Country[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) => {
         if (!this.destinations || this.destinations.length === 0) {
          return [];
        }
        return term.length < 2
          ? []
          : this.destinations
              .filter((v) => v.name.toLowerCase().includes(term.toLowerCase()))
              .slice(0, 10);
      })
    );

  formatter = (country: Country) => country.name;

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
    const payload = this.buildTripPayload();
   console.log('Trip Form Data:', this.tripForm.value);
  }
  buildTripPayload() {
    throw new Error('Method not implemented.');
  }
}
