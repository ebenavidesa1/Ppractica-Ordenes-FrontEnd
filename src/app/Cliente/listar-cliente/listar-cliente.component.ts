import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import {ServiceclienteService} from '../../ServiceCliente/servicecliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes:Cliente[];
  constructor(private service:ServiceclienteService, private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes().subscribe(data=>{
      this.clientes=data;
    })
  }

  NuevoCliente(){
    this.router.navigate(["addCliente"])
  }

  Editar(cliente:Cliente):void{
    localStorage.setItem("id",cliente.idcliente.toString());
    this.router.navigate(["editCliente"]);
  }

  Eliminar(cliente:Cliente){
    this.service.deleteCliente(cliente).subscribe(data=>{
      this.clientes=this.clientes.filter(p=>p!==cliente);
      alert("El cliente ha sido eliminado correctamente...!");
    })  }

}
