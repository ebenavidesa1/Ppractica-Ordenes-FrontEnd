import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ServiceclienteService } from 'src/app/ServiceCliente/servicecliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
 
  cliente :Cliente =new Cliente;
  constructor(private router:Router, private service:ServiceclienteService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getClientesId(+id).subscribe(data=>{
      this.cliente=data;
    });
  }

  Actualizar(cliente:Cliente){
    this.service.updateCliente(cliente).subscribe(data=>{
      this.cliente=data;
      alert("La información se actualizó correctamente...!");
      this.router.navigate(["listarClientes"]);
    });
  }
}
