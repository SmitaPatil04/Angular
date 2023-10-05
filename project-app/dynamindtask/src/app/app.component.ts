import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  
  title = 'dynamindtask';
  Highcharts:string=''
 
   generateChart() {
    const revenue = (<HTMLInputElement>document.getElementById("monthly-revenue")).value;

    var color = (<HTMLInputElement>document.getElementById("color")).value;
    var chartType = (<HTMLInputElement>document.getElementById("chart-type")).value;

    // this.Highcharts.chart('chart-container', {
    //     chart: {
    //         type: chartType,
    //     },
    //     title: {
    //         text: 'Monthly Revenue Chart',
    //     },
    //     series: [{
    //         name: 'Revenue',
    //         data: [revenue],
    //         color: color,
    //     }],
    //     xAxis: {
    //         categories: ['January', 'February', 'March']
    //     }
    // });
}
}
