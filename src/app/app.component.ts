import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontOrdenes';

  constructor(private router:Router){}

  ListarClientes(){
    this.router.navigate(["listarClientes"])
  }

  ListarArticulos(){
    this.router.navigate(["listarArticulos"])
  }

  NuevaOrden(){
    this.router.navigate(["nuevaOrden"])
  }

 
  

}
