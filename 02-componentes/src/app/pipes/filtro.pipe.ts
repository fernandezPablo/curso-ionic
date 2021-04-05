import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], text: string, columna: string = 'title'): any {

    if ( text == '' ) return arreglo;
    if ( !arreglo ) return arreglo;

    text = text.toLowerCase();

    return arreglo.filter(
      item => item[columna].toLowerCase().includes( text )
    )

    console.log('Arreglo: ', arreglo);
    console.log('Texto: ', text);
    return null;
  }

}
