import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Componente del pie de página

  anio: number = new Date().getFullYear();
  // Variable para almacenar el año actual

  constructor(public _servicio: InfoPaginaService) {
    // Constructor del componente, inyecta el servicio InfoPaginaService
  }

  ngOnInit(): void {
    // Método del ciclo de vida del componente (OnInit)
  }

}
