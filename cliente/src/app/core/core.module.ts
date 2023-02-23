import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CuidadorData } from './cuidadores-data';
import { CuidadoresService } from './cuidadores.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
   // InMemoryWebApiModule.forRoot(CuidadorData),
  ],
  providers:[CuidadoresService, AuthService,AuthGuard]
})
export class CoreModule { }
