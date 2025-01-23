import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CrearUsuariosService } from '../../services/crear-usuarios.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crear',
  standalone: false,
  
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css'
})
export class IniciarsesionComponent {
  mensaje : String = ""
  formulario : FormGroup
  loading : boolean = false;

  constructor(private fb : FormBuilder, private CrearusuarioService : CrearUsuariosService, private router : Router){
    this.formulario = this.fb.group({
      User : ['', [Validators.required]],
      Password : ['', [Validators.required]]

    })

  }

carga():void{
    this.loading = true;
}

Enviar( ): void {
    this.carga()
    console.log(this.formulario)
    setTimeout(()=>{
    if (this.formulario.valid) {
      this.mensaje = '';
      this.CrearusuarioService.registrarUsuarios(this.formulario.value).subscribe(
        response => {
          this.loading = false
          this.mensaje = response.message; 
          this.formulario.reset();
          this.mensaje = (response.message)
          if (this.mensaje === "E") {
            this.router.navigate(['/agendar']);
          } else {
            this.mensaje = 'Credenciales incorrectas';
          }
        },
        error => {
          this.loading = false;
          this.mensaje = 'Hubo un error al registrar al usuario';
        }
      );
    } 
  },3000);
}

}
