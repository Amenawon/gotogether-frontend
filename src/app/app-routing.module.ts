import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LayoutComponent } from './shared/layout/layout.component';

// const routes: Routes = [{
//   path:'', loadChildren:()=>import('../app/components/landing/landing.module').then(m=>m.LandingModule)
// }];

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/landing/landing.module').then((m) => m.LandingModule),
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
