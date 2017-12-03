import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { CarPartsComponent } from './car-parts.component';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    CarPartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, CarPartsComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
