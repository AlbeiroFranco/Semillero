import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    })

    /* this.miFormulario.get('terminos')?.valueChanges.subscribe(newValue => {
      console.log(newValue);
    }) */

    /* this.miFormulario.valueChanges.subscribe(form => {
      console.log(form);
      
    }) */
    /* this.miFormulario.valueChanges.subscribe(form => {
      delete form.terminos;
      this.persona = form;
      
    }) */
    this.miFormulario.valueChanges.subscribe(({terminos, ...rest}) => { // destructuracion
      this.persona = rest;
      
    })
  }

  miFormulario: FormGroup = this.formBuilder.group({
    genero: [ 'M', Validators.required],
    notificaciones: [ true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  guardar(){

    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;

    this.persona = formValue

    console.log(formValue);
    
  }


}
