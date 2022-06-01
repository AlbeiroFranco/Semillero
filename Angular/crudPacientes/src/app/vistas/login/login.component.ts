import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { LoginI } from '../../modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from '../../modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm = new FormGroup({
    usuario: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required)
  })

  errorStatus: boolean = false;
  errorMsg: any = ""

  constructor( private servicio: ApiService, private router: Router) { }
  
  ngOnInit(): void {
    this.checkLocalStorage();

  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }


  onLogin(form: LoginI){
    this.servicio.loginEmail(form)
    .subscribe(res => {
      console.log(res);
      
      let dataResponse:ResponseI = res;
      if(dataResponse.status == "ok"){
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['dashboard']);
      }else{
        this.errorStatus = true;
        this.errorMsg = dataResponse.result.error_msg;
        
      }
    })
    
    
  }

}
