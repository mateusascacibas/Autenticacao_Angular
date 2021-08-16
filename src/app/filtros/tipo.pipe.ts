import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    let tipo = "";

    switch(value){
      case "INICIO_ALMOCO":
        tipo = "Inicio de Almoço"
        break;
      case "TERMINO_PAUSA":
        tipo = "Termino de Pausa"
        break;
      case "INICIO_TRABALHO":
        tipo = "Inicio de Trabalho"
        break;
      case "INICIO_PAUSA":
        tipo = "Inicio de Pausa"
        break;
      case "TERMINO_TRABALHO":
        tipo = "Termino de Trabalho"
        break;
      case "TERMINO_ALMOCO":
        tipo = "Termino de Almoço"
        break;


    }


    return tipo;
  }

}
