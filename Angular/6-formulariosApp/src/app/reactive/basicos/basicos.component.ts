import { Component, OnInit} from '@angular/core';
import { FormGroup,  FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
    /*miFormulario: FormGroup = new FormGroup({
      'nombre'     : new FormControl('RTX 2060ti'),
      'precio'     : new FormControl('50000000'),
      'existencias': new FormControl('10')
    }) */

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 2060ti',
      precio: 2500
      
    })
  }

 

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]  ], // ['nombre o descripcion', 'validadores sincronos', validadores asincronos]
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]

  })

  
  camposNoValidos( campo: string ){
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched(); //para seleccionar todo los inputs
      return;
    }

    console.log(this.miFormulario.value); // para ver lo qu trae en un console.log y con ngSubmit en html
    this.miFormulario.reset();
  }
  
  
}
