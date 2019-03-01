import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts.src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'twistere';


  constructor() {
    this.options = {
      chart: {
        type: 'column'
      },
      title: { text: 'simple chart' },
      xAxis: {
        categories: ['Mon', 'Tues', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 34, 56, 70],
      }]
    };
  }
  options: Object;

} // end of file.
