import { Component, OnInit } from '@angular/core';
import { JsonServerService } from './json-server.service';
import { iCompany } from './user.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  /* iCompany: any; */
  userList: iCompany[] = [];

 constructor(private api: JsonServerService){
   
   /* this.initCompany(); */
 }

 /* initCompany(){
  this.iCompany = {
    CompanyId: 0,
    CompanyName: ''
  };
 } */
 
  ngOnInit(): void {
    this.getUser()  
  }

  /*addUser(){
     this.iCompany['isEdit'] = true; */
    /* this.userList.unshift(this.userList) 
  }*/

  getUser(){
    this.api.getUsers()
      .subscribe(res => {
        console.log(res);
        this.userList = res;
        /* this.userList.forEach((element: any) => {
          element['isEdit'] = false;
        }); */
      });
  }

  close(data: any){
    data.isEdit= false
  }

  getById( data: any){
    data.isEdit = true;
    /* this.initCompany(); */
  }

  saveCompany(data: any){
    data.isEdit = false
  }

  deleteCompany(data: any){

  }
  
}
