import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { DataService } from './services/data.service';

import { TableUtilitiesModule } from './table-utilities/table-utilities.module';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [ BrowserModule, CommonModule, HttpClientModule, TableUtilitiesModule ],
    declarations: [ AppComponent ],
    providers: [DataService]
})
export class AppModule {}