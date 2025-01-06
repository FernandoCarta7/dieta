import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListadoPacienteComponent } from './listado-paciente/listado-paciente.component';
import { RegitroPacienteComponent } from './regitro-paciente/regitro-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';

export const routes: Routes = [

    //USUARIOS
    {path:'registro-usuario', component: RegistroUsuarioComponent, title: 'Registro pacientes' },
    {path:'listar-usuarios', component: ListarUsuariosComponent, title: 'Listado Usuarios' },
    {path:'editar-usuario/:id', component: EditarUsuarioComponent, title: 'Editar usuario' },

    //PACIENTES
    {path:'registro-paciente', component: RegitroPacienteComponent, title: 'Registro pacientes' },
    {path:'listado-paciente', component: ListadoPacienteComponent, title: 'Listado Usuarios' },
    {path:'editar-usuario/:id', component: EditarPacienteComponent, title: 'Editar usuario' },



    {path: '', redirectTo: 'listar-usuarios', pathMatch: 'full' }

];
