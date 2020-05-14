import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { Location} from '@angular/common';
import { ServicioLineasFabService } from '../../service/servicio-lineas-fab.service';

@Component({
  selector: 'app-lineas-fabricacion',
  templateUrl: './lineas-fabricacion.component.html',
  styleUrls: ['./lineas-fabricacion.component.css']
})
export class LineasFabricacionComponent implements OnInit {

  lineasFab:any;

  constructor(private location: Location ,private activatedRoute: ActivatedRoute,private router:Router, private _serviceLineas:ServicioLineasFabService) { }

  ngOnInit() {
    this.getTodosLasLineas();
  }

  getTodosLasLineas(){
    this._serviceLineas.getAllLineas().subscribe(data => {
        this.lineasFab = data;
        console.log( this.lineasFab);
      });
      
  }
  goBack() {
    this.location.back();
  }
}
