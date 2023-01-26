import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CoreModule } from './core/core.module';
import { CuidadorComponent } from "./cuidador/cuidador.component";



@NgModule({
    declarations: [
        AppComponent,
        ClienteComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        CuidadorComponent
    ]
})
export class AppModule { }
