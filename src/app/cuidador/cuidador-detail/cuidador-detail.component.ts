import { Component,OnInit } from '@angular/core';
import { CuidadoresService } from '../../core/cuidadores.service';
import { Cuidador } from '../../shared/cuidador';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'diw-cuidador-detail',
  templateUrl: './cuidador-detail.component.html',
  styleUrls: ['./cuidador-detail.component.scss']
})
export class CuidadorDetailComponent implements OnInit {

  cuidador: Cuidador={
    id: 0,
    nombre: '',
    apellido: '',
    precio: 0,
    imagen:'',
    descripcion: '',
    categorias: [''],

  };
  cuidadorId: number = 0;
  
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private CuidadoresService :CuidadoresService

  ) {}
  ngOnInit() {
    this.cuidadorId = parseInt(this.activatedroute.snapshot.params['id']);
    this.CuidadoresService.getCuidadorById(this.cuidadorId)
      .subscribe((data: Cuidador) => (this.cuidador = data));
  }
  goEdit(): void {
    this.router.navigate(['/cuidadores', this.cuidadorId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }
}
