import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CategoriaProductosComponent } from './component/categoria-productos/categoria-productos.component';
import { FormContactoComponent } from './component/form-contacto/form-contacto.component';
import { LineasFabricacionComponent } from './component/lineas-fabricacion/lineas-fabricacion.component';
import { HistoriaComponent } from './component/historia/historia.component';

  import { from } from 'rxjs';

const appRoutes: Routes = [
  {path: 'home',component: Component},
  {path: 'categorias',component: CategoriaProductosComponent},
  {path: 'productos/:id',component: ProductosComponent },
  {path: 'contacto',component: FormContactoComponent },
  {path: 'lineas',component: LineasFabricacionComponent },
  {path: 'historia',component: HistoriaComponent },

  {path: '**',pathMatch:'full',redirectTo: 'app-root'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
