import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern( this.validatorService.emailPattern)], [this.emailValidator] ],
    username: ['', [Validators.required, this.validatorService.noValidoArleck]],
    password: ['', [Validators.required, Validators.minLength(6) ]],
    password2: ['', [Validators.required]]
  },{
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  })

  get errorMsg():string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']){
      return 'Email required'
    }else if (errors?.['pattern']){
      return 'Invalid mail format'
    }else if (errors?.['emailTomado']){
      return 'The email already exists'
    }

    return ''

  }

  constructor( 
              private formBuilder: FormBuilder,
              private validatorService: ValidatorsService,
              private emailValidator: EmailValidatorService
              ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jose franco',
      email: 'test1@test.com',
      username: 'Lostdark-',
      password: 123456,
      password2: 123456
    })
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid 
            && this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }



 /*  emailRequired(){ // se pueden usar estos metodos pero son mas largos para los errores
    return this.miFormulario.get('email')?.errors?.['required']
            && this.miFormulario.get('email')?.touched
  }

  emailFormat(){
    return this.miFormulario.get('email')?.errors?.['pattern']
            && this.miFormulario.get('email')?.touched
  }

  emailExist(){
    return this.miFormulario.get('email')?.errors?.['emailTomado']
            && this.miFormulario.get('email')?.touched
  } */

}
