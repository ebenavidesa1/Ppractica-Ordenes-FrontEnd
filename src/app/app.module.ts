import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClienteComponent } from './Cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './Cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './Cliente/edit-cliente/edit-cliente.component';
import { FormsModule } from '@angular/forms';
import { ServiceclienteService } from '../app/ServiceCliente/servicecliente.service';

import { HttpClientModule } from '@angular/common/http';
import { ListarArticuloComponent } from './Articulo/listar-articulo/listar-articulo.component';
import { AddArticuloComponent } from './Articulo/add-articulo/add-articulo.component';
import { AddDetalleOrdenComponent } from './Orden/add-detalle-orden/add-detalle-orden.component';
import { AddOrdenComponent } from './Orden/add-orden/add-orden.component';
import { ServiceService } from './ServiceOrden/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListarArticuloComponent,
    AddArticuloComponent,
    AddDetalleOrdenComponent,
    AddOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
