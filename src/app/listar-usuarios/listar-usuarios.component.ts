import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../Entidades/Paciente';

import { Router } from '@angular/router';
import { UsuarioService } from '../Servicio/UsuarioService.service';
import { Usuario } from '../Entidades/Usuario';
import { of } from 'rxjs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PacienteService } from '../Servicio/PacienteService.service';
@Component({
  selector: 'listar-usuarios',
  imports: [CommonModule, FormsModule, PaginationModule],
  providers:[],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent {

  usuarios: Usuario[];
  page: number = 0;
  size: number = 10;
  totalElements: number = 0;

  constructor(private pacienteServicio: PacienteService,
    private route: Router,
    private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    //Cargamos los productos
    //this.obtenerusuarios();
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this.usuarioServicio.obtenerUsuarios(this.page, this.size).subscribe(response => {
      this.usuarios = response.content;
      this.totalElements = response.totalElements;
    });
  }

  onPageChange(event: number): void {
    this.page = event - 1; // ngx-bootstrap usa base 1, Spring usa base 0
    this.obtenerUsuarios();
    
  }

  onSizeChange(size: number): void {
    this.size = size;
    this.page = 0; // Reinicia a la primera página
    this.obtenerUsuarios();
    
  }
}
