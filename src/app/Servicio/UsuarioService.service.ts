import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario, PaginatedResponse } from '../Entidades/Usuario';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private urlBase = 'http://localhost:8080/dieta-app/usuarios-pageable';
    private urlDelete = 'http://localhost:8080/dieta-app/usuario/delete';

    constructor(private http: HttpClient) { }

    obtenerUsuarios(page: number, size: number): Observable<PaginatedResponse<Usuario>> {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get<PaginatedResponse<Usuario>>(this.urlBase, { params });
    }

    eliminarUsuario( id : number ) : Observable<Object>{
        return this.http.delete(`${this.urlDelete}/${id}`)
    }
}
