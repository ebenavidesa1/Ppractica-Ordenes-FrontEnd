import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ServiceclienteService } from 'src/app/ServiceCliente/servicecliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  modelCliente = new Cliente();

  constructor(private router:Router, private service:ServiceclienteService) { }

  ngOnInit(): void {
   
  }

  GuardarCliente(cliente:Cliente){
    this.service.createCliente(cliente).subscribe(data=>{
      alert("El cliente se agregó correctamente...!");
      this.router.navigate(["listarClientes"]);
    })

  }

}
