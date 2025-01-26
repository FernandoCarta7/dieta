import { Component } from '@angular/core';
import { Usuario } from '../../Entidades/Usuario';
import { Paciente } from '../../Entidades/Paciente';
import { PacienteService } from '../../Servicio/PacienteService.service';
import { UsuarioService } from '../../Servicio/UsuarioService.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-regitro-paciente',
  imports: [CommonModule, FormsModule],
  templateUrl: './regitro-paciente.component.html',
  styleUrl: './regitro-paciente.component.css',
})
export class RegitroPacienteComponent {
  usuario: Usuario = new Usuario();
  ultimoUsuario: Usuario = new Usuario();
  id: number;
  paciente: Paciente = new Paciente();
  contrasenaValidar: string;
  constructor(
    private pacienteServicio: PacienteService,
    private usuarioServicio: UsuarioService,
    private router: Router
  ) {}
  ngOnInit() {
    this.usuario.email = null;
    this.usuario.contrasena = '';
  }

  onSubmitPaciente() {
    this.guardarPaciente();
  }

  guardarPaciente() {
    this.usuarioServicio.getLastUser().subscribe({
      next: (datos) => {
        this.id = datos.id;
        this.pacienteServicio.agregarPaciente(this.paciente, this.id).subscribe(
          {
            next: (datos) => {
              this.irListadoUsuarios();
            },
            error: (error: any) => { console.log("NO es un error, ES una oportunidad de mejora") }
          }
        )
      },
    });
    this.pacienteServicio.agregarPaciente(this.paciente, this.id).subscribe({
      next: (datos) => {
        //this.irListadoUsuarios();
      },
      error: (error: any) => {
        console.log('NO es un error, ES una oportunidad de mejora');
      },
    });
  }
  irListadoUsuarios() {
    this.router.navigate(['listar-usuarios']);
  };
}
