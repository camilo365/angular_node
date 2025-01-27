import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { VerComponent } from './components/ver/ver.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { PublicComponent } from './components/public/public.component';
import { RegistrarComponent } from './components/registrar/registrar.component';


const routes: Routes = [
  {path: "public", component: PublicComponent},
  {path: "registrar", component: RegistrarComponent},
  {path: "iniciar", component: IniciarsesionComponent},
  {path: "agendar", component: CrearComponent},
  {path: "ver", component: VerComponent},
  {path: "**", redirectTo:"public", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
