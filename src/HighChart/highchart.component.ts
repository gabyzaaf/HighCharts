import { Component, Input, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { HighChartService } from "./highchart.service";


@Component({
    selector:'fb-chart',
    template:'<div #host></div>',
    providers : [HighChartService]
})
export class highchartComponent implements OnChanges{
    @Input() config : any;
    @ViewChild('host')  host;

    constructor(private chartService : HighChartService){

    }

    ngOnChanges(changes: SimpleChanges){
        const {config} = changes;
        console.log(config);
        this.chartService.render(this.host.nativeElement,config.currentValue);
    }
}