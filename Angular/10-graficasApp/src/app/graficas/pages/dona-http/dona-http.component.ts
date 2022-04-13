import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

export interface Redes {
  facebook:             number;
  youtube:              number;
  whatsapp:             number;
  "facebook-messenger": number;
  instagram:            number;
}

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { 
        data: [],
      }
    ]
    };
    
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficaService: GraficasService) { }

  ngOnInit(): void {

    /* this.graficaService.getRedes()
      .subscribe( data => {
        console.log(data);

        const labels = Object.keys( data ); // lo convierte a utilizable saca las llaves del arreglo
        console.log( labels );

        const values = Object.values( data ); // lo convierte a utilizable saca las llaves del arreglo
        console.log( values );
        
        this.doughnutChartData = {
          labels: labels,
          datasets:[{data:values}],
        }
      }) */ //OPCION VALIDA 

      this.graficaService.getDonaData()
        .subscribe( ({ labels ,values }) => {
          /* console.log(labels);
          console.log(values); */
          this.doughnutChartData = {
            labels: labels,
            datasets:[{data:values}],
          }
        })
        
    
  }

}
