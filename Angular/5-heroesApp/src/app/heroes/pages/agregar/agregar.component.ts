import { Component, OnInit } from '@angular/core';
import { HeroesInterface, Publisher } from '../../interfaces/heroes-interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px      
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: HeroesInterface = {
    superhero: '',
    alter_ego:'',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''

  }

  constructor( 
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute, //traer la ruta para ver lo que se solicita
    private router: Router, // importar para navegar a otra pagina
    private snackBar: MatSnackBar,
    private dialog: MatDialog 
    ) { } // inyectamos el servicio dl metodo post

  ngOnInit(): void { // en esta parte se hacen las peticiones de router conexiones HTTP
   
    if(!this.router.url.includes('editar')){
      return;
    };
    
    this.activatedRoute.params
      .pipe (
        switchMap( ({id}) => this.heroesService.getHeroeporId(id))
      )
      .subscribe( heroe => this.heroe = heroe) 
  }

  guardar(){ // metodo para guardar
    
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if( this.heroe.id){
      this.heroesService.putHeroe( this.heroe)
        .subscribe( res => this.openSnackBar('Registro Actualizado') );
    }else {
      this.heroesService.postHeroe( this.heroe )
        .subscribe( res => {
          this.router.navigate(['/heroes/editar', res.id]);
          this.openSnackBar('Registro creado');
        }) 
    }

  }

  borrar(){

    const dialog = this.dialog.open(ConfirmarComponent,{
      width: '250px',
      data: this.heroe
      
    });

    dialog.afterClosed().subscribe(
      result => {
        if( result ){
          this.heroesService.deleteHeroe( this.heroe.id! )
            .subscribe( res => this.router.navigate(['heroes']));
        }
      })


    
  }

  openSnackBar( arg: string ){

    this.snackBar.open( arg, 'Ok!',{
      duration: 2000
    })
  }

}
