import { Component,Input,OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { Cuidador } from '../shared/cuidador';
import { CuidadoresService } from '../core/cuidadores.service';


@Component({
  selector: 'diw-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  // cuidadores: Cuidador[] = [];
  // constructor(private cuidadorService: CuidadoresService) {

  // }
  @Input() cliente: Cliente = {
    id: 0,
    nombre: '',
    contraseña:'',
  };
  ngOnInit() {
    // this.cuidadorService
    // .getCuidador()
    // .subscribe((data: any[]) => { 
    //   this.cuidadores = data[data.length-1]
    // });  
  }
}
