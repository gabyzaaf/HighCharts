import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { highchartComponent } from "../HighChart/highchart.component";
import { HighChartService } from "../HighChart/highchart.service";

@NgModule({
  declarations: [
    AppComponent,
    highchartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
