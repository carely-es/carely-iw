import { Component,Input } from '@angular/core';
import { Cliente } from '../shared/cliente';


@Component({
  selector: 'diw-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  @Input() cliente: Cliente = {
    id: 0,
    nombre: '',
    contraseña:'',
  };
}
