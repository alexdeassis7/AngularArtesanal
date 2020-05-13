import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriasServiceService } from '../../service/categorias-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-categoria-productos',
  templateUrl: './categoria-productos.component.html',
  styleUrls: ['./categoria-productos.component.css']
})
export class CategoriaProductosComponent implements OnInit {
categorias:any;

  constructor(private location: Location,private activatedRoute: ActivatedRoute,private router:Router, private _categorias : CategoriasServiceService) { 

  }

  ngOnInit() {
    this.getCorridas();
    console.log("trae categorias: "+ this.categorias);
  }
  goBack() {
    this.location.back();
  }


  getCorridas(){
    this._categorias.getAllCategorias().subscribe(data => {
      this.categorias = data;
      console.log( this.categorias);
    });
    
    //this.categorias=this._categorias.getAllCategoriasLocal();
  }
  verProductos(strIdCat){


    console.log("Categoria: "+strIdCat);

    this.router.navigate( ['/productos/', strIdCat] );

  }
}
