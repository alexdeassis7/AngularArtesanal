import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasServiceService {

 private catlocal:any[]=[{"category_name":"Aldabones","category_thumb_image":"resized\/Aldabones_4da5d40485679_120x120.jpg","category_id":"1","category_full_image":"Aldabones_4da5d4049314c.jpg"},{"category_name":"Aplicaciones","category_thumb_image":"resized\/Aplicaciones_4da5dffef2d49_120x120.jpg","category_id":"3","category_full_image":"Aplicaciones_4da5dfff0c1f7.jpg"},{"category_name":"Bisagras","category_thumb_image":"resized\/Bisagras_4da5fc8eb2658_120x120.jpg","category_id":"4","category_full_image":"Bisagras_4da5fc8ebe930.jpg"},{"category_name":"Bocallaves","category_thumb_image":"resized\/Bocallaves_4dcc4b3b0fb36_120x120.jpg","category_id":"26","category_full_image":"Bocallaves_4dcc4b3b1c677.jpg"},{"category_name":"Buzones","category_thumb_image":"resized\/Buzones_4da5fd83cddde_120x120.jpg","category_id":"5","category_full_image":"Buzones_4da5fd83d9968.jpg"},{"category_name":"Cabeza  llaves","category_thumb_image":"resized\/Cabeza__llaves_4de007cc03625_120x120.jpg","category_id":"29","category_full_image":"Cabeza__llaves_4de007cc11cc5.jpg"},{"category_name":"Cerraduras\/Cierres","category_thumb_image":"resized\/Cerraduras_Cierr_4dadfa8b9054f_120x120.jpg","category_id":"23","category_full_image":"Cerraduras_Cierr_4dadfa8b9cca6.jpg"},{"category_name":"Chapas","category_thumb_image":"resized\/Chapas_4dd14f43b1763_120x120.jpg","category_id":"27","category_full_image":"Chapas_4dd14f43bdabd.jpg"},{"category_name":"Cubetas","category_thumb_image":"resized\/Cubetas_4da8a9e2d16fc_120x120.jpg","category_id":"21","category_full_image":"Cubetas_4da8a9e2dde07.jpg"},{"category_name":"Especiales","category_thumb_image":"resized\/Especiales_4daca6f62aab0_120x120.jpg","category_id":"22","category_full_image":"Especiales_4daca6f637210.jpg"},{"category_name":"Fallebas","category_thumb_image":"resized\/Fallebas_4da7393f37594_120x120.jpg","category_id":"6","category_full_image":"Fallebas_4da7393f438ed.jpg"},{"category_name":"Florones y Cadenas","category_thumb_image":"resized\/Florones_4da75a3083e7c_120x120.jpg","category_id":"7","category_full_image":"Florones_4da75a30905d2.jpg"},{"category_name":"Indicadores","category_thumb_image":"resized\/Indicadores_4da6173de45c8_120x120.jpg","category_id":"8","category_full_image":"Indicadores_4da6173e00dfa.jpg"},{"category_name":"Manijas","category_thumb_image":"resized\/Manijas_4da8a0d04a46b_120x120.jpg","category_id":"9","category_full_image":"Manijas_4da8a0d056faa.jpg"},{"category_name":"Manijones","category_thumb_image":"resized\/Manijones_4da60f729ea3c_120x120.jpg","category_id":"10","category_full_image":"Manijones_4da60f72aa5d2.jpg"},{"category_name":"Miradores","category_thumb_image":"resized\/Miradores_4db9c418845c8_120x120.jpg","category_id":"25","category_full_image":"Miradores_4db9c41891335.jpg"},{"category_name":"Pasadores","category_thumb_image":"resized\/Pasadores_4da4ba528a380_120x120.jpg","category_id":"12","category_full_image":"Pasadores_4da4ba52966d5.jpg"},{"category_name":"Perchas","category_thumb_image":"resized\/Perchas_4da4b307b1879_120x120.jpg","category_id":"13","category_full_image":"Perchas_4da4b307c13b2.jpg"},{"category_name":"Perillas","category_thumb_image":"resized\/Perillas_4da30eeaea38a_120x120.jpg","category_id":"14","category_full_image":"Perillas_4da30eeb0344d.jpg"},{"category_name":"Pomos","category_thumb_image":"resized\/Pomos_4da3675f30e3e_120x120.jpg","category_id":"15","category_full_image":"Pomos_4da3675f3dd59.jpg"},{"category_name":"Religiosos","category_thumb_image":"resized\/Religiosos_4da36c87f1590_120x120.jpg","category_id":"16","category_full_image":"Religiosos_4da36c88105ac.jpg"},{"category_name":"Soportes","category_thumb_image":"resized\/Soportes_4dadfc07dcd85_120x120.jpg","category_id":"24","category_full_image":"Soportes_4dadfc07ec3a5.jpg"},{"category_name":"Timbres","category_thumb_image":"resized\/Timbres_4da31929b58c1_120x120.jpg","category_id":"17","category_full_image":"Timbres_4da31929c67c9.jpg"},{"category_name":"Tiradores","category_thumb_image":"resized\/Tiradores_4da3760d53740_120x120.jpg","category_id":"18","category_full_image":"Tiradores_4da3760d60265.jpg"},{"category_name":"Varios","category_thumb_image":"resized\/Varios_4da33527a73bf_120x120.jpg","category_id":"20","category_full_image":"Varios_4da33527b3f05.jpg"},{"category_name":"Ventilaciones","category_thumb_image":"resized\/Ventilaciones_4da33561b201a_120x120.jpg","category_id":"19","category_full_image":"Ventilaciones_4da33561be762.jpg"}];
 private prueba:any;
  constructor(private http: HttpClient) { }

  getAllCategorias(){
    return this.http.get('/categorias/ferreteria/categorias.json');
//    return this.http.get('/categorias/ferreteria/srv-categorias.php');

    // this.prueba=this.http.get('../assets/categorias.json');
    // console.log(this.prueba);
    // return this.http.get('../assets/categorias.json');
    
  }
  getAllCategoriasLocal(){
    return this.catlocal;
  }
}
