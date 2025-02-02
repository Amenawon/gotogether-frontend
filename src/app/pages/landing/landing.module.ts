
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { GalleryJumbotronComponent } from './gallery-jumbotron/gallery-jumbotron.component';
import { MainJumbotronComponent } from './main-jumbotron/main-jumbotron.component';

const routes :Routes=[
    {
        path:'',
        component:LandingComponent
    }
]
@NgModule({
  declarations: [ 
    LandingComponent,
    GalleryJumbotronComponent,
    MainJumbotronComponent
  ],
  exports: [
    LandingComponent,
    GalleryJumbotronComponent,
    MainJumbotronComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingModule { }
