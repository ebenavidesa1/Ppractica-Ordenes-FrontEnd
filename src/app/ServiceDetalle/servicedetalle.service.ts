import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DetalleOrden } from '../Modelo/DetalleOrden'

@Injectable({
  providedIn: 'root'
})
export class ServicedetalleService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ordenes/detalle';

  geDetallesOrden(id:number){
    return this.http.get<DetalleOrden[]>(this.Url+"/"+id);
  }

  createDetalleOrden(detalle:DetalleOrden){
    return this.http.post<DetalleOrden>(this.Url,detalle);
  }
}
