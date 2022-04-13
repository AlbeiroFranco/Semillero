import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({// controles del formulario
    region  : ['', Validators.required], 
    pais    : ['', Validators.required], 
    frontera: ['', Validators.required] 
  })

  //llenar Selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: PaisSmall[] = [];

  //UI

  cargando: boolean = false;

  guardar(){
    console.log(this.miFormulario.value);
    
  }

  constructor(
              private formBuilder: FormBuilder,
              private paisesService: PaisesService
              ) {  }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones  //se trae regiones ya que el otro _regioens es privado
    
    /* //cuando cambie la region
      this.miFormulario.get('region')?.valueChanges
          .subscribe( region => {
            console.log(region)

            this.paisesService.getPaisesRegion( region )
              .subscribe(res => {
                console.log(res);
                
                this.paises = res
              })
          }) */

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => { // para limpiar los campos
          this.miFormulario.get('pais')?.reset('');// resetear el formulario
          this.cargando = true; // para mostar el estado de cargando
        }),
        switchMap( region => this.paisesService.getPaisesRegion( region )) // para traer los datos
      )
      .subscribe( paises => { // recibe los datos y los imprime
        this.paises = paises
        this.cargando = false;
      })

     //cuando cambia el pais   
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap( () => {
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap( code =>  this.paisesService.getCode( code )),
        switchMap( pais => this.paisesService.getPaisesCode( pais?.borders! ))
      )  
      .subscribe ( paises => {
        console.log(paises)
        this.fronteras = paises
        this.cargando = false;
      })

    }

}
