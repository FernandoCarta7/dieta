import { Component } from '@angular/core';
import { Paciente } from '../../Entidades/Paciente';
import { PacienteService } from '../../Servicio/PacienteService.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-listado-paciente',
  imports: [CommonModule, FormsModule, PaginationModule],
  templateUrl: './listado-paciente.component.html',
  styleUrl: './listado-paciente.component.css'
})
export class ListadoPacienteComponent {
  
  pacientes: Paciente[];
  page: number = 0;
  size: number = 10;
  totalElements: number = 0;

  constructor(private pacienteService : PacienteService,
              private router : Router
  ){}

  ngOnInit(){
    //Cargamos los productos
    this.obtenerPacientes();
  }

  private obtenerPacientes(){
    this.pacienteService.obtenerPacientes(this.page,this.size).subscribe(
      response => {
        this.pacientes = response.content
        this.totalElements = response.totalElements
      }
    )
  }

  onPageChange(event: number): void {
    this.page = event - 1; // ngx-bootstrap usa base 1, Spring usa base 0
    this.obtenerPacientes();
    
  }

  onSizeChange(size: number): void {
    this.size = size;
    this.page = 0; // Reinicia a la primera página
    this.obtenerPacientes();
    
  }

}
