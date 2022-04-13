import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})

export class ErrorMsgDirective implements OnInit {
  
  private _color: string = 'red'
  private _mensaje: string = 'Este campo es requerido'
  
  htlmElement: ElementRef<HTMLElement>;
  
  @Input() set color( valor: string){
    this._color = valor;
    this.setColor()
  }
  
  @Input() set mensaje( valor: string){
    this._mensaje = valor; 
    this.setMsg
  }

  @Input() set valido( valor: boolean){
    if(valor === true ){
      this.htlmElement.nativeElement.classList.add('hidden');
      
    }else{
    this.htlmElement.nativeElement.classList.remove('hiden');
    } 
  }

  constructor( private el: ElementRef<HTMLElement>) {
    console.log('constructor directive');
    console.log(el);
    this.htlmElement = el;

   }
  
  ngOnInit(): void {
    this.setClass();
    this.setColor();
    this.setMsg();
  }
  
  setClass(): void{
    this.htlmElement.nativeElement.classList.add('form-text');
  }

  setColor(): void{
    this.htlmElement.nativeElement.style.color = this._color;
  }

  setMsg(): void{
    this.htlmElement.nativeElement.innerHTML = this._mensaje
  } 

}

//alternativa larga

/* export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red'
  
  htlmElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red' //se trae la informacion del padre y aca la replica
  @Input() mensaje: string = 'Este campo es obligatorio';
  @Input() clase: string = 'Form-text'

  constructor( private el: ElementRef<HTMLElement>) {
    console.log('constructor directive');
    console.log(el);
    this.htlmElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if( changes['mensaje']){
      const mensajeVal = changes['mensaje'].currentValue;
      console.log(mensajeVal);
      this.htlmElement.nativeElement.innerHTML = mensajeVal;
    }

    if(changes['color']){
      const colorValue = changes['color'].currentValue;
      this.htlmElement.nativeElement.style.color = colorValue;
    } 

    console.log(changes);
    
  }

  ngOnInit(): void {
    console.log('onInit Directiva');
    this.setColor();
    this.setMsg();
    this.setClass();
  }

  setColor(): void{
    this.htlmElement.nativeElement.style.color = this.color;
    this.htlmElement.nativeElement.classList.add('form-text');
  }

  setMsg(): void{
    this.htlmElement.nativeElement.innerHTML = this.mensaje
  } 

  setClass(): void{
    this.htlmElement.nativeElement.setAttribute('class',this.clase)
  }


} */