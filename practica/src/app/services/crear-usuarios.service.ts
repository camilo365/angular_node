import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuariosService {

  private apiUrl = 'http://localhost:3000/api/crear-usuarios'

  constructor(private http: HttpClient) { }

  registrarUsuarios(datos: {User : string, Password : String}): Observable<any>{
    return this.http.post<any>(this.apiUrl,datos);
  }
}
