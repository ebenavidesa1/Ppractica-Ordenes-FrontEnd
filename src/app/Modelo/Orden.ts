import { Cliente } from "./Cliente";

export class Orden{
   
    constructor(){
    }

    idorden:number;
    fecha: Date;
    idcliente:number;
    detalleOrden: DetalleOrden;
    cliente:Cliente;

}


  interface DetalleOrden {
    iddetalle: number,
    idorden: number,
    idarticulo: number
  }