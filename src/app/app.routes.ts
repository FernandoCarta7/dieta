import { Routes } from '@angular/router';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';

export const routes: Routes = [

    {path:'registro-paciente', component: RegistroPacienteComponent, title: 'Registro pacientes' },
    { path: '', redirectTo: 'registro-paciente', pathMatch: 'full' }

];
