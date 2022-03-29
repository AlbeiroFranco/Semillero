import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  constructor( private formBuilder: FormBuilder) { }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ '' ,[Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Gears of war', Validators.required], ['Call Of Duty', Validators.required], ['NFS', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required)// para insertar datos

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  camposNoValidos(campos : string){
    return this.miFormulario.controls[campos].errors 
            && this.miFormulario.controls[campos].touched
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    /* this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required) ); */ // dos maneras de usar
    this.favoritosArr.push ( this.formBuilder.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset();
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value); // para ver lo qu trae en un console.log y con ngSubmit en html
    this.miFormulario.reset();
    console.log(this.miFormulario)
  }

  borrar( i: number){
    this.favoritosArr.removeAt(i)
  }

}
