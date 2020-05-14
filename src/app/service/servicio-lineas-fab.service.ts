import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioLineasFabService {

  constructor(private http: HttpClient) {

   }
  
   getAllLineas(){
    return this.http.get('/lineas/ferreteria/linea-fabricacion.json')
  }
}
