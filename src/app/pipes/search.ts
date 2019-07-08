import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    //Value sera la lista de objetos ( Lista de amigos ) y Args sera el query string ( Ejemplo Ricardo)
    public transform(value: any, args: string): any {
        //Regresa un return por que viene vacio el arreglo de value
        if(!value) {
            return;
        }
        //Regresa todo el arreglo
        if (!args) {
            return value;
        }
        //compara el elemento 
        args = args.toLowerCase();
        return value.filter ( (item) => {
            return JSON.stringify(item).toLowerCase().includes(args);
        } );
    }
}