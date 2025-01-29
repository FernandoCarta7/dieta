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
  //DELCLARACIÓN DE VARIABLES
  usuario: Usuario = new Usuario();
  ultimoUsuario: Usuario = new Usuario();
  id: number;
  paciente: Paciente = new Paciente();
  contrasenaValidar: string;
  peso: number;
  altura: number;
  primerNombre: String;
  primerApellido: String;
  segundoNombre: String;
  segundoApellido: String;
  antecedentesMedicos: String;
  fechaNacimiento: Date;
  genero: String;
  bandera: boolean;

  //CONSTRUCTOR DEL COMPONENTE
  constructor(
    private pacienteServicio: PacienteService,
    private usuarioServicio: UsuarioService,
    private router: Router
  ) {}
  ngOnInit() {
    this.usuario.email = null;
    this.usuario.contrasena = '';
    this.peso = 0.0;
    this.altura = 0.0;
    this.primerNombre = null;
    this.primerApellido = null;
    this.segundoNombre = ' - ';
    this.segundoApellido = ' - ';
    this.antecedentesMedicos = null;
    this.fechaNacimiento = null;
    this.genero = null;
  }

  onSubmitPaciente() {
    this.guardarPaciente();
  }

  guardarPaciente() {
    this.paciente.primerNombre = this.primerNombre;
    this.paciente.primerApellido = this.primerApellido;
    this.paciente.segundoNombre = this.segundoNombre;
    this.paciente.segundoApellido = this.segundoApellido;
    this.paciente.antecedentesMedicos = this.antecedentesMedicos;
    this.paciente.fechaNacimiento = this.fechaNacimiento;
    this.paciente.peso = this.peso;
    this.paciente.altura = this.altura;
    this.paciente.genero = this.genero;

    this.usuarioServicio.getLastUser().subscribe({
      next: (datos) => {
        this.id = datos.id;
        this.pacienteServicio
          .agregarPaciente(this.paciente, this.id)
          .subscribe({
            next: (datos) => {
              this.irListadoUsuarios();
            },
            error: (error: any) => {
              console.log('NO es un error, ES una oportunidad de mejora');
            },
          });
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
  }
  validarCampos(): void {
    this.bandera = false;
  }
}
