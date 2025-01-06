import { Component } from '@angular/core';
import { Usuario } from '../../Entidades/Usuario';
import { UsuarioService } from '../../Servicio/UsuarioService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'editar-usuario',
  imports: [FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  usuario: Usuario;
  id: number;
  contrasenaValidar : String ;


  constructor(private usuarioServicio: UsuarioService,
    private router: Router,
    private ruta: ActivatedRoute) {
    //Adentro del constructor
  }

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.usuarioServicio.getUsuario(this.id).subscribe(
      {
        next: (datos) => this.usuario = datos
        ,
        error: (errores: any) => console.log(errores)
      }
    );
  }

  onSubmitUsuario(){
    this.guardarUsuario();
  }
  irListadoUsuarios(){
    this.router.navigate(['listar-usuarios']);
  }
  
  guardarUsuario(){
    this.usuarioServicio.editarUsuario(this.id, this.usuario).subscribe({
      next: (datos) => this.irListadoUsuarios(),
      error: (errores) => console.log(errores)
    })
  }

}
