import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarArticuloComponent } from './Articulo/listar-articulo/listar-articulo.component';
import { AddArticuloComponent } from './Articulo/add-articulo/add-articulo.component';
import { AddClienteComponent } from './Cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './Cliente/edit-cliente/edit-cliente.component';
import { ListarClienteComponent } from './Cliente/listar-cliente/listar-cliente.component';
import { AddOrdenComponent } from './Orden/add-orden/add-orden.component';

const routes: Routes = [
  {path:'listarClientes',component:ListarClienteComponent},
  {path:'addCliente',component:AddClienteComponent},
  {path:'editCliente',component:EditClienteComponent},
  {path:'listarArticulos',component:ListarArticuloComponent},
  {path:'addArticulo',component:AddArticuloComponent},
  {path:'nuevaOrden',component:AddOrdenComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    paramsInheritanceStrategy: 'always'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
