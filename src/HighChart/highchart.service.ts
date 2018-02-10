import * as highcharts from 'highcharts';
import { ElementRef } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable()
export class HighChartService {

    render(el:ElementRef,config : any){
        highcharts.chart(el,config);
    }
}