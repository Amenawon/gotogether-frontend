import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';
import { Country } from 'src/app/model/country';
import { GenerateItinerary } from 'src/app/model/generate-itinerary';
import { CountryService } from 'src/app/services/country.service';
import { ItineraryService } from 'src/app/services/itinerary.service';

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

  constructor(private countryService: CountryService, private itineraryService:ItineraryService,
    private router: Router ) {}

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
  generateTrip() {
   console.log('Trip Form Data:', this.tripForm.value);
   this.router.navigate(['/trip-summary'], {
      state: { tripData: this.tripForm.value },
    });
    // const payload = this.buildTripPayload();
    // this.itineraryService.generateItinerary(payload).subscribe({
    //   next: (data) => {
    //     console.log('Generated Itinerary:', data);
    //     this.loading = false;
    //     alert('Itinerary generated successfully!');
    //   }
    //   , error: (err) => {
    //     console.error('Error generating itinerary:', err);
    //     this.loading = false;
    //     alert('Failed to generate itinerary. Please try again.');
    //   }
    // });
  }

  buildTripPayload():GenerateItinerary {
    const interests: string[] = [];
    interests.push(this.tripForm.value.traveler);
    interests.push(this.tripForm.value.budget);
    const payload: GenerateItinerary = {
      destination: this.tripForm.value.destination.name,
      interests: interests,
      days: this.tripForm.value.noOfDays,
    }
  return payload;
 }
}
