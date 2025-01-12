import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor( private router : Router ){}

  goToRecetas(){
    this.router.navigate(['']);
  }
  goToPacientes(){
    this.router.navigate(['listado-paciente']);
  }
  goToCitas(){
    this.router.navigate(['']);
  }
  goToUsuarios(){
    this.router.navigate(['listar-usuarios']);
  }


}
