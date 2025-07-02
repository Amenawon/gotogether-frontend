import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        NgbModule,
        NgbTypeaheadModule,
        JsonPipe
    ],
    exports: [
        CommonModule,
        NgbModule,
        NgbTypeaheadModule,
        JsonPipe
    ]
})
export class SharedModule { }