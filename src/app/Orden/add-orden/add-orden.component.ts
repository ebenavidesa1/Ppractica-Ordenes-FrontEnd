import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Articulo } from 'src/app/Modelo/Articulo';
import { Orden } from 'src/app/Modelo/Orden';
import { DetalleOrden } from 'src/app/Modelo/DetalleOrden';
import { ServiceclienteService } from 'src/app/ServiceCliente/servicecliente.service';
import {ServicearticuloService } from 'src/app/ServiceArticulo/servicearticulo.service';
import { ServiceService } from 'src/app/ServiceOrden/service.service';
import { ServicedetalleService } from 'src/app/ServiceDetalle/servicedetalle.service';

@Component({
  selector: 'app-add-orden',
  templateUrl: './add-orden.component.html',
  styleUrls: ['./add-orden.component.css']
})


export class AddOrdenComponent implements OnInit {
  modelCliente :Cliente =new Cliente;
  modelArticulo :Articulo =new Articulo;
  orden :Orden=new Orden;
  detalles:DetalleOrden[];
  detalle :DetalleOrden=new DetalleOrden;
  

  constructor(private router:Router, private service:ServiceclienteService, private serviceart:ServicearticuloService,
    private serviceorden:ServiceService, private servicedet:ServicedetalleService) { }

    ngOnInit(): void {
      
    }

  BuscarCliente():void{
    this.service.getClientesIdentificacion(this.modelCliente.identificacion).subscribe(data=>{
      this.modelCliente=data;
      this.orden.cliente=data;
    });
  }

  BuscarArticulo():void{
    this.serviceart.getArticulosCodigo(this.modelArticulo.codigo).subscribe(data=>{
      this.modelArticulo=data;
      this.detalle.articulo=data;
      this.router.navigate(["nuevaOrden"]);
    });
  }

  GuardarOrden(orden:Orden){
  
    this.serviceorden.createOrden(orden).subscribe(data=>{
      alert("La orden se creó correctamente...!");
      this.detalle.orden=data;
    })

  }

  GuardarDetalle(detalle:DetalleOrden){
  
    this.servicedet.createDetalleOrden(detalle).subscribe(data=>{
      alert("El detalle se creó correctamente...!");
      this.servicedet.geDetallesOrden(detalle.orden.idorden).subscribe(data=>{
        this.detalles=data;
      })
    })

  }

  

}
