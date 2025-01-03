import { Routes } from '@angular/router';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';

import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

export const routes: Routes = [

    {path:'registro-paciente', component: RegistroPacienteComponent, title: 'Registro pacientes' },
    {path:'listar-usuarios', component: ListarUsuariosComponent, title: 'Listado Usuarios' },
    {path:'editar-usuario/:id', component: EditarUsuarioComponent, title: 'Editar usuario' },
    {path: '', redirectTo: 'registro-paciente', pathMatch: 'full' }

];
