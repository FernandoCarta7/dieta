import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

export const routes: Routes = [

    {path:'registro-usuario', component: RegistroUsuarioComponent, title: 'Registro pacientes' },
    {path:'listar-usuarios', component: ListarUsuariosComponent, title: 'Listado Usuarios' },
    {path:'editar-usuario/:id', component: EditarUsuarioComponent, title: 'Editar usuario' },
    {path: '', redirectTo: 'registro-usuario', pathMatch: 'full' }

];
