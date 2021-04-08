import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Orden } from '../Modelo/Orden'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ordenes/orden';

  
  createOrden(orden:Orden){
    return this.http.post<Orden>(this.Url,orden);
  }

}
