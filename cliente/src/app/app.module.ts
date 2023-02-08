import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CoreModule } from './core/core.module';
import { CuidadorModule } from './cuidador/cuidador.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from "./shared/shared.module";
import { ClienteDetailComponent } from './cliente/cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { ClienteItemComponent } from './cliente/cliente-item/cliente-item.component';
import { ClienteNewComponent } from './cliente/cliente-new/cliente-new.component';





@NgModule({
    declarations: [
        AppComponent,
        ClienteComponent,
        ClienteDetailComponent,
        ClienteEditComponent,
        ClienteItemComponent,
        ClienteNewComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        CuidadorModule,
        HomeModule,
        SharedModule
    ]
})
export class AppModule { }
