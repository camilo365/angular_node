import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CrearUsuariosService } from '../../services/crear-usuarios.service';



@Component({
  selector: 'app-crear',
  standalone: false,
  
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  mensaje : String = ""
  formulario : FormGroup

  constructor(private fb : FormBuilder, private CrearusuarioService : CrearUsuariosService){
    this.formulario = this.fb.group({
      Nombre : ['', [Validators.required]],
      Apellido : ['', [Validators.required]]

    })

  }

  Enviar(): void {
    if (this.formulario.valid) {
      this.CrearusuarioService.registrarUsuarios(this.formulario.value).subscribe(
        response => {
          this.mensaje = response.message; 
          this.formulario.reset();
          console.log(response)  
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
