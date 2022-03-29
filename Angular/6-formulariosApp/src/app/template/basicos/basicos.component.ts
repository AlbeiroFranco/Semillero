import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm

  valorInicial = {
    producto: 'RTX 2060 ti',
    precio: 10,
    existencias: 5
  }

  constructor() { }

  ngOnInit(): void {
  }

  /* guardar( miFormulario: NgForm ){
    console.log(miFormulario);
    console.log(miFormulario.value);
    
  } */

  guardar(){
    /* console.log(this.miFormulario); */
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    }); // para resetear el formulario
    
  }

  validar(): boolean {
    return this.miFormulario?.controls['producto']?.invalid 
            && this.miFormulario?.controls['producto']?.touched
  }

  validarPrecio(): boolean{
    this.miFormulario?.controls['precio']?.setErrors(null);
    return this.miFormulario?.controls['precio']?.touched
            && this.miFormulario?.controls['precio']?.value < 0
           
  }



}
