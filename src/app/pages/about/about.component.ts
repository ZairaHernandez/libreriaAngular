import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // Clase del componente AboutComponent que implementa OnInit

  constructor(public infoService: InfoPaginaService) { }
  // Constructor del componente
  // Se inyecta el servicio InfoPaginaService en la propiedad 'infoService'

  ngOnInit(): void {
  }

}
