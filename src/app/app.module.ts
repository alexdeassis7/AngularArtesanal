import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './component/head/head.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CategoriaProductosComponent } from './component/categoria-productos/categoria-productos.component';
import { InteriorBodyComponent } from './component/interior-body/interior-body.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatRippleModule, MatSelectModule } from "@angular/material";
import { ProductosService } from './service/productos.service';
import { CategoriasServiceService } from './service/categorias-service.service';
import { ServicioLineasFabService } from './service/servicio-lineas-fab.service';
import { ProductosComponent } from './component/productos/productos.component';
import { FormContactoComponent } from './component/form-contacto/form-contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineasFabricacionComponent } from './component/lineas-fabricacion/lineas-fabricacion.component';
import { HistoriaComponent } from './component/historia/historia.component';
//import { importExpr } from '@angular/compiler/src/output/output_ast';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    NavbarComponent,
    CategoriaProductosComponent,
    InteriorBodyComponent,
    ProductosComponent,
    FormContactoComponent,
    LineasFabricacionComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatCheckboxModule,
    MaterialModule
  ],
  providers: [CategoriasServiceService, ProductosService ,ServicioLineasFabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
