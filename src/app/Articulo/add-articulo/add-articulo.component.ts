import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServicearticuloService } from 'src/app/ServiceArticulo/servicearticulo.service';


@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.component.html',
  styleUrls: ['./add-articulo.component.css']
})
export class AddArticuloComponent implements OnInit {

  modelArticulo = new Articulo();

  constructor(private router:Router, private service:ServicearticuloService) { }

  ngOnInit(): void {
  }

  GuardarArticulo(articulo:Articulo){
    this.service.createArticulo(articulo).subscribe(data=>{
      alert("El artículo se agregó correctamente...!");
      this.router.navigate(["listarArticulos"]);
    })

  }

}
