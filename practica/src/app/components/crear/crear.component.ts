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
  usuarios : FormGroup

  constructor(private fb : FormBuilder){
    this.usuarios = this.fb.group({
      Nombre : ['',[Validators.required]],
      Apellido : ['',[Validators.required]],
      Edad : ['',[Validators.required]],
      Ciudad : ['',[Validators.required]]
    })
  }
  
  mostrar(){
    const datos = this.usuarios

    console.log(datos)

  }
}
