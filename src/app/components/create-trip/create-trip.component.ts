import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
generateTrip() {
throw new Error('Method not implemented.');
}
travelList: any;
loading: any;
onLocationSelect($event: Event) {
throw new Error('Method not implemented.');
}
tripForm: any;
budgetOptions: BudgetOption[] = [
  { title: 'Economy', icon: '💰', desc: 'Budget-friendly options' },
  { title: 'Standard', icon: '💵', desc: 'Moderate spending' },
  { title: 'Luxury', icon: '💎', desc: 'High-end experiences' },
];
  constructor() { }
  ngOnInit(): void {
  }

}
