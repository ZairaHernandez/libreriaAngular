import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoTop } from '../interfaces/info-top.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  // Servicio para gestionar la información de la página

  info: InfoPagina = {}; // Almacena la información de la página
  cargada = false; // Bandera para rastrear si la información se ha cargado
  top: InfoTop = {}; // Almacena la información de los elementos Top

  constructor(private http: HttpClient) {
    // Constructor del servicio, inyecta HttpClient para realizar peticiones HTTP

    this.cargarInfo(); // Carga la información general de la página
    this.cargarTop(); // Carga la información de los elementos Top
  }

  private cargarInfo() {
    // Método privado para cargar la información general de la página desde un archivo JSON

    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true; // Marca la información como cargada
        this.info = resp; // Asigna la información recibida a la propiedad 'info'
        console.log(resp); // Muestra la respuesta en la consola (puede omitirse)
      });
  }

  private cargarTop() {
    // Método privado para cargar la información de los elementos Top desde una fuente externa (Firebase en este caso)

    this.http.get('https://angular-html-fa946-default-rtdb.firebaseio.com/.json')
      .subscribe((resp: InfoTop) => {
        this.top = resp; // Asigna la información recibida a la propiedad 'top'
        console.log(resp); // Muestra la respuesta en la consola (puede omitirse)
      });
    // this.equipo = resp
  }
}