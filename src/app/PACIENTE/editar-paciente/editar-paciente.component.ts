import { Component } from '@angular/core';
import { Paciente } from '../../Entidades/Paciente';
import { PacienteService } from '../../Servicio/PacienteService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../Entidades/Usuario';
import { UsuarioService } from '../../Servicio/UsuarioService.service';

@Component({
  selector: 'app-editar-paciente',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.css',
})
export class EditarPacienteComponent {
  paciente: Paciente = new Paciente();
  //paciente2: Paciente = new Paciente();
  usuarioid: number;
  id: number;
  pacienteBuscar: Paciente = new Paciente();
  bandera = true;

  constructor(
    private pacienteServicio: PacienteService,
    private router: Router,
    private ruta: ActivatedRoute,
    private usuarioServicio: UsuarioService
  ) {}

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];

    this.pacienteServicio.getPaciente(this.id).subscribe({
      next: (datos) => {
        this.paciente = new Paciente();
        this.paciente = datos;
        this.usuarioid = this.paciente.usuarioid;
        this.bandera = true;
      },
      error: (errores: any) => console.log(errores),
    });
  }
  guardarPacienteEditar() {
    this.pacienteServicio
      .editarPaciente(this.usuarioid, this.paciente)
      .subscribe({
        next: (datos) => this.goToPacientes(),
        error: (errores) =>
          console.log('No es un error, es una oportunidad de mejora'),
      });
    this.pacienteServicio.editarPaciente(this.usuarioid, this.paciente);
  }

  guardarPaciente() {
    this.pacienteServicio
      .agregarPaciente(this.paciente, this.usuarioid)
      .subscribe({
        next: (datos) => this.goToPacientes(),
      });
  }

  goToPacientes() {
    this.router.navigate(['listado-paciente']);
  }

  onSubmitEditar() {
    this.guardarPacienteEditar();
  }

  onSubmit() {
    this.guardarPaciente();
  }
}
