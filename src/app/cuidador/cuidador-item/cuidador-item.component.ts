import { Component, Input } from '@angular/core';
import { Cuidador } from '../../shared/cuidador';

@Component({
  selector: 'diw-cuidador-item',
  templateUrl: './cuidador-item.component.html',
  styleUrls: ['./cuidador-item.component.scss']
})
export class CuidadorItemComponent {
  @Input() cuidador: Cuidador = {
    id: 0,
    nombre: '',
    apellido: '',
    imagen: '',
    descripcion: '',
    categorias: [''],
    precio:0,
  };
}
