import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroesInterface } from '../../interfaces/heroes-interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor( 
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroesInterface
    ) { }

  ngOnInit(): void {
  }

  borrar(){
    this.dialogRef.close(true)
  }

  cerrar(){ 
    this.dialogRef.close()
  }
}
