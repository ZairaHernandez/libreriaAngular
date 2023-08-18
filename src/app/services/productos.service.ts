import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // Servicio para gestionar productos

  constructor(private http: HttpClient) {
    // Constructor del servicio, inyecta HttpClient para realizar peticiones HTTP
    this.cargarProductos(); // Carga los productos al inicializar el servicio
  }

  private cargarProductos() {
    // Método privado para cargar productos desde una fuente externa (Firebase en este caso)

    this.http.get("https://angular-html-fa946-default-rtdb.firebaseio.com/productos_idx.json")
      .subscribe((resp: any) => {
        console.log(resp); // Muestra la respuesta en la consola (puede omitirse)
      });
  }
}