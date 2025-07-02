import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTripComponent } from './create-trip.component'; 
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
    { path: '', component: CreateTripComponent }
];

@NgModule({
    declarations: [
        CreateTripComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        CreateTripComponent
    ] 
})
export class CreateTripModule { }