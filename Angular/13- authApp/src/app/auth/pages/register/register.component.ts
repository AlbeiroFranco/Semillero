import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  miFormulario : FormGroup = this.fb.group({
    name: ['Albeiro', [ Validators.required] ],
    email: ['Jose.test@gmail.com', [ Validators.required, Validators.email]],
    password: ['123456', [ Validators.required, Validators.minLength(6)]],
    password2: ['123456', [ Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  registro(){
    const { name, email, password} = this.miFormulario.value;

    this.authService.registro(name, email, password)
    .subscribe( res => {
      console.log(res)
      
      if( res === true){
        this.router.navigateByUrl('/dashboard')
      } else{
        Swal.fire('Error', res, 'error');
      }
    })
    
  }


}
