import { Component } from '@angular/core';
import { Usuario } from '../../Entidades/Usuario';
import { Paciente } from '../../Entidades/Paciente';
import { PacienteService } from '../../Servicio/PacienteService.service';
import { UsuarioService } from '../../Servicio/UsuarioService.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegitroPacienteComponent } from "../../PACIENTE/regitro-paciente/regitro-paciente.component";

@Component({
  selector: 'registro-usuario',
  imports: [CommonModule, FormsModule, RegitroPacienteComponent],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {

  usuario: Usuario = new Usuario();
  ultimoUsuario : Usuario = new Usuario();
  id : number;
  bandera : boolean = false;

  paciente: Paciente = new Paciente();
  contrasenaValidar : string;

  ngOnInit(){
    this.usuario.email = null;
    this.usuario.contrasena = "";
  }

  constructor(private pacienteServicio: PacienteService,
    private usuarioServicio: UsuarioService,
    private router: Router) { }


  guardarUsuario() {
    this.usuarioServicio.agregarUsuario(this.usuario).subscribe(
      {
        next: (datos) => {
          
          //this.irListadoUsuarios();
        },
        error: (error: any) => { console.log("NO es un error, ES una oportunidad de mejora") }
      }
    )

  }

  irListadoUsuarios() {
    this.router.navigate(['listar-usuarios']);
  };

  onSubmitUsuario(){
    this.guardarUsuario();
  }

  onSubmitPaciente(){
    
    this.guardarPaciente();
  }

  guardarPaciente(){
    this.usuarioServicio.getLastUser().subscribe({
      next: (datos) => {
        this.id = datos.id;
        //console.log("Hola");
      }
    })
    
  }


}
