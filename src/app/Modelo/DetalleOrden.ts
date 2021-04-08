import { Articulo } from "./Articulo";
import { Orden } from "./Orden";

export class DetalleOrden{
   
    constructor(){
    }

    iddetalle: number;
    idorden: number;
    idarticulo: number;
    articulo:Articulo;
    orden:Orden;
   
}

