import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { PacienteI } from '../../modelos/usuario.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseI } from '../../modelos/response.interface';
import { AlertasService } from 'src/app/services/alertas.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  pacientes: PacienteI[] = [];
  datosPaciente!: PacienteI;

  editarForm = new FormGroup ({
    nombre: new FormControl(''),
    dni: new FormControl(''), 
    correo: new FormControl(''), 
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero : new FormControl(''),
    telefono : new FormControl(''),
    fechaNacimiento : new FormControl(''),
    token : new FormControl('', Validators.required), 
    pacienteId: new FormControl('', Validators.required)
  })

  nuevoForm = new FormGroup ({
    nombre: new FormControl(''),
    dni: new FormControl(''), 
    correo: new FormControl(''), 
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero : new FormControl(''),
    telefono : new FormControl(''),
    fechaNacimiento : new FormControl(''),
    token : new FormControl(''), 
    pacienteId: new FormControl('')
  })

  constructor( private service: ApiService, private router: Router, private alertas: AlertasService ) { }
  
  ngOnInit(): void {
    
    this.service.getPacientes(1)
      .subscribe(res => {
        console.log(res);
        this.pacientes = res;
      });

      let token = this.gettoken();
      this.nuevoForm.patchValue({
        'token': token
      })  
    
  }

  editando(id: any, data: any){
    console.log(id)
    data.edit = true

    let token = this.gettoken();

    this.service.singlePacientes(id)
      .subscribe(res => {
        this.datosPaciente = res;
        console.log(this.datosPaciente)
        
        this.editarForm.setValue({
          'nombre': this.datosPaciente.Nombre,
          'dni': this.datosPaciente.DNI,
          'correo': this.datosPaciente.Correo,
          'direccion': this.datosPaciente.Direccion,
          'codigoPostal': this.datosPaciente.CodigoPostal,
          'genero': this.datosPaciente.Genero,
          'telefono': this.datosPaciente.Telefono,
          'fechaNacimiento': this.datosPaciente.FechaNacimiento,
          'token': token ,
          'pacienteId': this.datosPaciente.PacienteId 
        });

        console.log(this.editarForm.value)
      });
    
  }

  gettoken(){
    return localStorage.getItem('token')
  }

  guardar(form: PacienteI, data: any){
    console.log(form);
    data.edit = false

    this.service.putUser(form)
      .subscribe((res: ResponseI) => {
        console.log(res);
        if(res.status == "ok"){
          this.alertas.showSuccess('Datos editados', 'Success')
        }else{
          this.alertas.showError(res.result.error_msg, 'Error')
        }
      })
  }

  nuevo(form: PacienteI){
    
    console.log(form)
    this.service.postUser(form)
      .subscribe((res: ResponseI) => {
        console.log(res);
        
      })
    
  }

  eliminar(){
    /* let datos: PacienteI = this.editarForm.value; */
    this.service.deleteUser(this.editarForm.value)
      .subscribe((res: ResponseI) => {
        if(res.status == "ok"){
          this.alertas.showSuccess('Datos eliminados', 'Success');
        }else{
          this.alertas.showError(res.result.error_msg, 'Error');
        }
      })
    
  }

  salir(){
    console.log('salir');
    
  }

  
}
