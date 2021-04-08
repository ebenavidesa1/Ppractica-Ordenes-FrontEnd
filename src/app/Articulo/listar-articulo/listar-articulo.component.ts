import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import {ServicearticuloService} from '../../ServiceArticulo/servicearticulo.service';

@Component({
  selector: 'app-listar-articulo',
  templateUrl: './listar-articulo.component.html',
  styleUrls: ['./listar-articulo.component.css']
})
export class ListarArticuloComponent implements OnInit {

 
  articulos:Articulo[];
  constructor(private service:ServicearticuloService, private router:Router) { }


  ngOnInit(): void {
    this.service.geArticulos().subscribe(data=>{
      this.articulos=data;
    })
  }

  NuevoArticulo(){
    this.router.navigate(["addArticulo"])
  }

}
