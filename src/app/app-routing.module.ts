import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
