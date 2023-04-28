import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  titulo: string = "Lista de Usuarios"
  prueba: string = 'Esto es prueba'

  usuarios:Usuario[] = [];

  constructor( private usuariosService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuariosService.getAll().subscribe(
      e => this.usuarios = e
    );
  }

  delete(usuario: Usuario):void{
    console.log("click eliminar")
    this.usuariosService.delete(usuario.id).subscribe(
      res => this.usuariosService.getAll().subscribe(
        response => this.usuarios = response
      )
    )
  }

}
