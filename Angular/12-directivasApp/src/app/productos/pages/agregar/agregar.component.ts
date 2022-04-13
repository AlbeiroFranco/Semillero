import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  texto1: string = 'Jose Franco';
  color: string = 'red'

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validacion( campo: string):boolean{
    return this.miFormulario.get(campo)?.invalid || false; // cuando el boolean puede responder un undefined
  } 

  cambiarNombre(){
    this.texto1 = Math.random().toString();
  }

  cambiarColor(){
    const color = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, '0').slice(-6)}`
    this.color = color;
  }

}
