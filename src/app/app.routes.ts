import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './USUARIO/registro-usuario/registro-usuario.component';

import { ListarUsuariosComponent } from './USUARIO/listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './USUARIO/editar-usuario/editar-usuario.component';
import { ListadoPacienteComponent } from './PACIENTE/listado-paciente/listado-paciente.component';
import { RegitroPacienteComponent } from './PACIENTE/regitro-paciente/regitro-paciente.component';
import { EditarPacienteComponent } from './PACIENTE/editar-paciente/editar-paciente.component';

export const routes: Routes = [

    //USUARIOS
    {path:'registro-usuario', component: RegistroUsuarioComponent, title: 'Registro pacientes' },
    {path:'listar-usuarios', component: ListarUsuariosComponent, title: 'Listado Usuarios' },
    {path:'editar-usuario/:id', component: EditarUsuarioComponent, title: 'Editar usuario' },

    //PACIENTES
    {path:'registro-paciente', component: RegitroPacienteComponent, title: 'Registro pacientes' },
    {path:'listado-paciente', component: ListadoPacienteComponent, title: 'Listado Pacientes' },
    {path:'editar-paciente/:id', component: EditarPacienteComponent, title: 'Editar paciente' },


    //DIRECCIÓN POR DEFAULT
    {path: '', redirectTo: 'listado-paciente', pathMatch: 'full' }

];
