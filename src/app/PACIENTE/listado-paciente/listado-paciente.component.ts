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
  primerNombre : String;
  apellido : String;
  generoFiltrar : String;
  banderaNombre: boolean;
  banderaApellido: boolean;

  constructor(private pacienteService : PacienteService,
              private router : Router
  ){}

  ngOnInit(){
    //Cargamos los productos
    this.primerNombre = null;
    this.apellido = null;
    this.banderaApellido = true;
    this.banderaNombre = true;
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

  verPaciente( id:number ){
    this.router.navigate(['editar-paciente', id]);
  }

  deletePaciente( id : number ){
    this.pacienteService.eliminarPaciente( id ).subscribe({
      next: datos => this.obtenerPacientes()
      //error: errores=>console.log(errores)
      
    })
  }

  filtrarPaciente(  ){
    this.page = 0;
    this.size = 10;
    if(this.primerNombre !== null){
      this.banderaApellido = false;
      this.pacienteService.filtrarPacientes(this.page,this.size, this.primerNombre).subscribe(
        response => {
          
          this.pacientes = response.content
          this.totalElements = response.totalElements
          
        }
      )
    }else if (this.apellido.length !== null){
      this.banderaNombre = false;
      this.pacienteService.filtrarPacientesApellido(this.page,this.size, this.apellido).subscribe(
        response => {
          
          this.pacientes = response.content
          this.totalElements = response.totalElements
          
        }
      )
    }
    
    
  }
  resetLista(){
    this.banderaApellido = true;
    this.banderaNombre = true;
    this.ngOnInit();
  }
  goToRegistro(){
    this.router.navigate(['registro-usuario']);
  }


}
