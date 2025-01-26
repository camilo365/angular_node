import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './components/crear/crear.component';
import { VerComponent } from './components/ver/ver.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ImageModule } from 'primeng/image';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PublicComponent } from './components/public/public.component';



@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    VerComponent,
    IniciarsesionComponent,
    PublicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageModule,
    ProgressSpinnerModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
