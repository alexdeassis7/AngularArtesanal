import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormContactoComponent } from "../form-contacto/form-contacto.component";
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {


  
  mostrar = true; 
  constructor() { }



 
  ngOnInit() {

  }

  ocultar() {
    this.mostrar = false;
  }
}
