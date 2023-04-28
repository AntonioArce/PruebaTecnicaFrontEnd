import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = 'http://localhost:8080/api/users'

  constructor( private http: HttpClient ) { }

  // Llamado a la API REST para obtener usuarios
  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
  }

  // Crear un usuario
  create(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario)
  }

  // Eliminar un usuario
  delete(id: number):Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.url}/${id}`)
  }



}
