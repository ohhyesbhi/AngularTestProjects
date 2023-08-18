import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';


  lineChart1 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Power(kW)'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      min: 1,
      categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
  },
    series: [
      {
        name: '',
        data: [0.0,0.2,0.4,0.6,0.8]
      } as any
    ]
  })

  lineChart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Powerfactor'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      min: 1,
      categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
  },
    series: [
      {
        data: [1, 2, 3]
      } as any
    ]
  })

}
