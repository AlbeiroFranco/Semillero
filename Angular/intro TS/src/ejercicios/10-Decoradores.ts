/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@reportableClassDecorator
class superClase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo')
    }
}

console.log( superClase );

const miClase = new superClase;

console.log( miClase.miPropiedad );













