import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuidadoresService } from 'src/app/core/cuidadores.service';

@Component({
  selector: 'diw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  id: any;

  constructor(private cuidador: CuidadoresService, private router: Router) {}

  ngOnInit() {}

  newProduct() {
    // Get max product Id from the product list
    this.cuidador.getMaxCuidadorId().subscribe((data) => (this.id = data));
    this.router.navigate(['/products', this.id, 'new']);
  }
}
