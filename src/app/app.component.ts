import { Component } from '@angular/core';
import {getHighChartsData,getHighChartsData1,generateGraph} from '../Component/chartfile';
import { Serie } from "../data/Serie";
import { Point } from "../data/Point";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  charData : any;
  data: string[] = ['1750', '1800', '1850', '1900', '1950', '1999', '2050'];
  charInformation : Array<Serie> = new Array<Serie>();
  
  serie1:Serie = new Serie("x serie",[106, 107, 111, 133, 221, 767, 1766])
  serie2:Serie = new Serie("Africa",[106, 107, 111, 133, 221, 767, 1766])
  serie3:Serie = new Serie("Europe",[163, 203, 276, 408, 547, 729, 628])
  serie4:Serie = new Serie("America",[18, 31, 54, 156, 339, 818, 1201])
  serie5:Serie = new Serie("Oceania",[2, 2, 2, 6, 13, 30, 46])
  
  point:Point = new Point("x axis",this.data);

  

  constructor(){
    this.charData = getHighChartsData;
    this.charInformation.push(this.serie1);
    this.charInformation.push(this.serie2);
    this.charInformation.push(this.serie3);
    this.charInformation.push(this.serie4);
    this.charInformation.push(this.serie5);
  }

  updateChart(type){
    switch(type){
      case 'bar':
        this.charData = getHighChartsData;
      break;
      case 'line':
        this.charData = getHighChartsData1;
      break;
      case 'sample':
        this.charData = generateGraph("Graphique number",this.charInformation,this.point);
    }
    
  }
}
