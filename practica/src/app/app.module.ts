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
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RegistrarComponent } from './components/registrar/registrar.component';




@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    VerComponent,
    IniciarsesionComponent,
    PublicComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageModule,
    ProgressSpinnerModule,
    BlockUIModule,
    DialogModule,
    ButtonModule,
    DialogModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
