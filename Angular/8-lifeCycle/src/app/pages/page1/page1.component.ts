import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  nombre: string = 'Jose' //propiedad cuando se llaman asi
  segundos: number = 0;
  timerSubscription!: Subscription;


  constructor() { //inyecciones de dependencia o alguna inicializacon
    console.log('constructor')
  }

  guardar(){}

  ngOnInit(): void {// hook nos permite ejecutar un metodo cuando un ciclo de vida cambia en angular// es cuando el html ya esta inicializado
    
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe( i => {
      console.log(i)
      this.segundos = i
        } )
  }

  ngOnChanges(): void {

    console.log('ngOnChanges');
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  ngDoCheck(): void {

    console.log('ngDoCheck');
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }

  ngAfterContentChecked(): void {

    console.log('ngAfterContentChecked');
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }

  ngAfterViewInit(): void {

    console.log('ngAfterViewInit');
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  ngAfterViewChecked(): void {

    console.log('ngAfterViewChecked');
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }

  ngOnDestroy(): void {

    this.timerSubscription.unsubscribe();
    console.log('ngOnDestroy');
    console.log('Timer Limpiado');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
    

}
