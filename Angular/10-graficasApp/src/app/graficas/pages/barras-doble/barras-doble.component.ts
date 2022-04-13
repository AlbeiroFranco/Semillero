import { Component } from '@angular/core';
import { ChartData} from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent  {

  public proveedoresData: ChartData<'bar'> = {
    labels:['2018', '2019','2020','2021','2022'],
    datasets:[
      {data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      {data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  };
  
  public productoData: ChartData<'bar'> = {
    labels:['2018', '2019','2020','2021','2022'],
    datasets:[
      {data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  };
    
}
