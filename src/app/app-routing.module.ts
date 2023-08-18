import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  // Ruta comodín para redirigir a "home" en caso de ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  // Configuración del módulo de rutas utilizando "RouterModule.forRoot"

  exports: [RouterModule]
  // Exportación del módulo de rutas para que sea utilizado en otras partes de la aplicación
})
export class AppRoutingModule {
  // Módulo de rutas principal de la aplicación
}