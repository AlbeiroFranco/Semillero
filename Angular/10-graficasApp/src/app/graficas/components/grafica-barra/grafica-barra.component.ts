import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input () horizontal: boolean = false; // se recibe el valor que tiene el html [horizontal]=true

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  @Input() barChartData!: ChartData<'bar'>; 
  
  ngOnInit(): void {
    /* console.log(this.horizontal); */
    /* console.log(this.barChartData); */
    

    if (this.horizontal){
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!['y']!.min = 0
    }
    
  }

}
