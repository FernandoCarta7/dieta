export class Usuario {
    id: number;
    email: String;
    contrasena: String;
    rol: String;
}
export interface PaginatedResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}