import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CrearPacientesService } from '../../services/crear-pacientes.service';
import { subscribe } from 'diagnostics_channel';



@Component({
  selector: 'app-crear',
  standalone: false,
  
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  usuarios : FormGroup
  mensaje : string = ''

  constructor(private fb : FormBuilder, private crear_paciente : CrearPacientesService){
    this.usuarios = this.fb.group({
      Nombre : ['',[Validators.required]],
      Apellido : ['',[Validators.required]],
      Edad : ['',[Validators.required]],
      Ciudad : ['',[Validators.required]]
    })
  }
  
  mostrar(){

    if(this.usuarios.valid){
      const datos = this.usuarios
      this.crear_paciente.CrearPacientes(this.usuarios.value).subscribe(
        response => {
          this.mensaje = response.message
          console.log(response)
        }
      )  
      console.log(datos)
    }

  }
}
