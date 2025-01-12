import { Component } from '@angular/core';
import { Paciente } from '../../Entidades/Paciente';
import { PacienteService } from '../../Servicio/PacienteService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-paciente',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.css'
})
export class EditarPacienteComponent {

  paciente: Paciente = new Paciente();
  id_usuario: number;
  pacienteBuscar: Paciente = new Paciente();
  bandera = false;

  constructor(private pacienteServicio: PacienteService,
    private router: Router,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id_usuario = this.ruta.snapshot.params['id'];
    this.pacienteServicio.getPacientePorUsuario(this.id_usuario).subscribe(
      {
        next: (datos) => {
          this.paciente = datos;
          if (this.paciente != null || this.paciente == undefined) {
            this.bandera = false;
            this.paciente = new Paciente();
          } else {
            this.bandera = true
          }
        },
        error: (errores: any) => console.log(errores)
      }
    );
  }
  guardarPacienteEditar() {
    this.pacienteServicio.editarPaciente(this.id_usuario, this.paciente).subscribe(
      {
        next: (datos) => this.goToPacientes(),
        error: errores => console.log('No es un error, es una oportunidad de mejora')
      }
    )
    this.pacienteServicio.editarPaciente(this.id_usuario,this.paciente);

  }

  guardarPaciente() {
    this.pacienteServicio.agregarPaciente(this.paciente,this.id_usuario).subscribe({
      next: (datos) => this.goToPacientes()
    })
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
