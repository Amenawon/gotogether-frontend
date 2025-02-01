import { RouterModule, Routes } from "@angular/router";
import { ViewRequirementsComponent } from "./view-requirements.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClient } from "@angular/common/http";
const routes :Routes=[
    {
        path:'',
        component:ViewRequirementsComponent
    }
]
@NgModule({
  declarations: [ 
    ViewRequirementsComponent
  ],
  exports: [
    ViewRequirementsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewRequirementsModule { }
