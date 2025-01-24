
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component'; 

const routes :Routes=[
    {
        path:'',
        component:LayoutComponent
    }
]
@NgModule({
  declarations: [ 
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SharedModule { }
