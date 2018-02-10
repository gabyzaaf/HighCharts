import { Component } from '@angular/core';
import {getHighChartsData,getHighChartsData1} from '../Component/chartfile';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  charData : any;
  constructor(){
    this.charData = getHighChartsData;
  }

  updateChart(type){
    this.charData = type === 'bar' ? getHighChartsData : getHighChartsData1;
  }
}
