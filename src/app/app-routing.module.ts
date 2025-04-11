import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CreateTripComponent } from './components/create-trip/create-trip.component';
 
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
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
