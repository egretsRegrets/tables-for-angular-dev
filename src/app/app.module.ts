import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { TableUtilitiesModule } from './table-utilities/table-utilities.module';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [ BrowserModule, CommonModule, TableUtilitiesModule ],
    declarations: [ AppComponent ]
})
export class AppModule {}