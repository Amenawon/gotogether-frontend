import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { TripSummaryComponent } from './components/trip-summary/trip-summary.component';
 
const routes: Routes = [
  {
    path: '',  
    component: CreateTripComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/create-trip/create-trip.module').then((m) => m.CreateTripModule),
      }
    ],
  },
  {
    path: '',  
    component: TripSummaryComponent,
    children: [
      {
        path: 'trip-summary',
        loadChildren: () =>
          import('./components/trip-summary/trip-summary.module').then((m) => m.TripSummaryModule),
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
