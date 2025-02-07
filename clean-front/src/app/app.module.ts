import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoferTableComponent } from './presentation/chofer-table/chofer-table.component';
import { DataModule } from '../data/data.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChoferTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
