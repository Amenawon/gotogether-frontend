import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-requirements',
  templateUrl: './view-requirements.component.html',
  styleUrls: ['./view-requirements.component.css']
})
export class ViewRequirementsComponent implements OnInit {
  countryControl = new FormControl('');
  countries: string[] = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'India',
    'Brazil',
    'South Africa',
  ];
  filteredCountries: Observable<string[]>;

  requirements: any = null;
  isLoading: boolean = false;
  error: string = '';

  constructor() {
    this.filteredCountries = this.countryControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterCountries(value || ''))
    );
  }

  private _filterCountries(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter((country) =>
      country.toLowerCase().includes(filterValue)
    );
  }

  ngOnInit(): void {
  }

  fetchRequirements() {
    const country = this.countryControl.value;
    if (!country) {
      this.requirements = null;
      return;
    }
  
    this.isLoading = true;
    this.error = '';
  
    // Mock data
    setTimeout(() => {
      this.requirements = {
        visa: 'A visa is required for travelers from most countries.',
        covid: 'Proof of vaccination and a negative PCR test are required.',
        other: 'Ensure your passport is valid for at least 6 months.',
      };
      this.isLoading = false;
    }, 1000);
  }
}
