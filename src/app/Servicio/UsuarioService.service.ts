import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario, PaginatedResponse } from '../Entidades/Usuario';
import { Paciente } from '../Entidades/Paciente';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private urlBase = 'http://localhost:8080/dieta-app/usuarios-pageable';
    private urlDelete = 'http://localhost:8080/dieta-app/usuario/delete';
    private urlAgregar = 'http://localhost:8080/dieta-app/usuario/agregar';
    private urlAgregarPaciente = 'http://localhost:8080/dieta-app/paciente/agregar-paciente';
    private urlUltimoUsuario = 'http://localhost:8080/dieta-app/usuario/ultimo';


    constructor(private http: HttpClient) { }


    ultimoUsuario: Usuario = new Usuario();



    obtenerUsuarios(page: number, size: number): Observable<PaginatedResponse<Usuario>> {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get<PaginatedResponse<Usuario>>(this.urlBase, { params });
    }

    eliminarUsuario(id: number): Observable<Object> {
        return this.http.delete(`${this.urlDelete}/${id}`)
    }

    agregarUsuario(usuario: Usuario): Observable<Object> {
        return this.http.post(this.urlAgregar, usuario);

        //this.http.post(`${this.urlAgregarPaciente}/${id}`, paciente);
    }

    obtenerUltimoUsuario(): Observable<Usuario> {
        return this.http.get<Usuario>(this.urlUltimoUsuario);

    }

}


