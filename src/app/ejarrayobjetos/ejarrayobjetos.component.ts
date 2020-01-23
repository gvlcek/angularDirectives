import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.model';

@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {

  public alumnos: Array<Alumno> = [
    {id: 1, nombre: 'Ronnie', apellidos: 'Vlcek', ciudad: 'CABA'},
    {id: 2, nombre: 'Guada', apellidos: 'Vlček', ciudad: 'Recoleta'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
