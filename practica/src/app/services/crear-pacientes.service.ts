import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearPacientesService {
  private apicrearpacientes = 'http://localhost:3000/api/crear-pacientes'

  constructor( private http : HttpClient ) {}

  CrearPacientes(datos: {Nombre: String, Apellido: String, Edad: Number, Ciudad : String}): Observable<any>{
    return this.http.post<any>(this.apicrearpacientes,datos)

  }
}
