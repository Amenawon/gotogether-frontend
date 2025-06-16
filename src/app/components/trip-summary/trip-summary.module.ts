import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TripSummaryComponent } from './trip-summary.component';

const routes: Routes = [
    { path: '', component: TripSummaryComponent }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule,
        TripSummaryComponent
    ],
    exports: [
        TripSummaryComponent
    ] 
})
export class TripSummaryModule { }