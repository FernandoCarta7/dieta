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
    private urlEditarUsuario = 'http://localhost:8080/dieta-app/usuario/editar';
    private urlGetUsuario = 'http://localhost:8080/dieta-app/usuario/obtenerUsuario';
    private urlGetLastUser = 'http://localhost:8080/dieta-app/usuario/getLastUser';

    constructor(private http: HttpClient) { } 

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

    getUsuario(id : number)  { 
        return this.http.get<Usuario>(`${this.urlGetUsuario}/${id}`);
    }

    editarUsuario(id : number, usuario: Usuario) : Observable<Object> {
        return this.http.put(`${this.urlEditarUsuario}/${id}`, usuario);

    }
    getLastUser(){
        return this.http.get<Usuario>(this.urlGetLastUser);
    }

}


