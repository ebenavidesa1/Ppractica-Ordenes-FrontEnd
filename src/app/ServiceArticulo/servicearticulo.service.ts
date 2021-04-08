import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Articulo } from '../Modelo/Articulo'

@Injectable({
  providedIn: 'root'
})
export class ServicearticuloService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ordenes/articulos';

  geArticulos(){
    return this.http.get<Articulo[]>(this.Url);
  }
  createArticulo(articulo:Articulo){
    return this.http.post<Articulo>(this.Url,articulo);
  }

  getArticulosCodigo(codigo:String){
    return this.http.get<Articulo>(this.Url+"/"+codigo);
  }
}
