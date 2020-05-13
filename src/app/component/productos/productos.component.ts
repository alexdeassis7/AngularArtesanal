import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { Location} from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductosService} from '../../service/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  allProductos:any;
  filtradosProductos:any;
 

  constructor(private location: Location ,private activatedRoute: ActivatedRoute,private router:Router, private _productos:ProductosService) 
  { 

  }

  ngOnInit() {
    //cargo todos los productos....
    this.getTodosLosProductos();
  }

  getTodosLosProductos(){
    this._productos.getAllProductos().subscribe(data => {
        this.allProductos = data;
        console.log( this.allProductos);
      });
      
  }
  goBack() {
    this.location.back();
  }
  getProductosPorCategoria(strIdCat:string){
    

  }

}
