import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CrearUsuariosService } from '../../services/crear-usuarios.service';



@Component({
  selector: 'app-crear',
  standalone: false,
  
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css'
})
export class IniciarsesionComponent {
  mensaje : String = ""
  formulario : FormGroup

  constructor(private fb : FormBuilder, private CrearusuarioService : CrearUsuariosService){
    this.formulario = this.fb.group({
      User : ['', [Validators.required]],
      Password : ['', [Validators.required]]

    })

  }

  Enviar(): void {
    console.log(this.formulario)
    if (this.formulario.valid) {
      this.CrearusuarioService.registrarUsuarios(this.formulario.value).subscribe(
        response => {
          this.mensaje = response.message; 
          this.formulario.reset();
          console.log(response.message)
          this.mensaje = (response.message)  
        },
        error => {
          this.mensaje = 'Hubo un error al registrar al usuario';
        }
      );
    } else {
      this.mensaje = 'Por favor complete todos los campos correctamente.';
    }
  }



}
