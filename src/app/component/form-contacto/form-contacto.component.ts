import { Component, OnInit,EventEmitter ,Output } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {


  constructor(private location: Location) { }

  ngOnInit() {
    
  }
  goBack() {
    this.location.back();
  }


}
