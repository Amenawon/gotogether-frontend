import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css'],
})
export class CreateTripComponent implements OnInit {
  onLocationSelect($event: Event) {
    throw new Error('Method not implemented.');
  }
  generateTrip() {
    throw new Error('Method not implemented.');
  }
  travelList: any;
  loading: any;
  tripForm: FormGroup = new FormGroup({
    destination: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    budget: new FormControl(''),
    noOfDays: new FormControl('')
  });
  budgetOptions = [
    { title: 'Economy', icon: '💰', desc: 'Budget-friendly options' },
    { title: 'Standard', icon: '💵', desc: 'Moderate spending' },
    { title: 'Luxury', icon: '💎', desc: 'High-end experiences' },
  ];
  constructor() {}
  ngOnInit(): void {}
}
