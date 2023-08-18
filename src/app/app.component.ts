import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Clase principal del componente raíz de la aplicación

  constructor(public infoPaginaService: InfoPaginaService, public productosService: ProductosService) {
    // Constructor del componente, inyecta los servicios InfoPaginaService y ProductosService
  }
}
