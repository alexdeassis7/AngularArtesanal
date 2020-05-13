import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cualEntorno:boolean;

  constructor(private http: HttpClient) { 
    this.cualEntorno=environment.production;
    console.log("estoy en produccion: "+this.cualEntorno);

  }

  getProductosByCategoria(strId:string){
    if(this.cualEntorno){
      // si es true es produccion
    }else{
      return this.http.get('http://localhost/ferreteria/srv-prodBycategorias.php?id='+strId)

    }

  }
  
  getProductoById(strId:string){
    return this.http.get('http://localhost/ferreteria/srv-productoById.php?id='+strId)
  }

  getProductoBySearch(strText:string){
    return this.http.get('http://localhost/ferreteria/srv-prodBySearch.php?search='+strText)
  }

  getAllProductos(){
    return this.http.get('/productos/ferreteria/productos.json')
  }
  
}
