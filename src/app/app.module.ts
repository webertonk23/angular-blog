import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CardComponent } from './card/card.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NovaNoticiaComponent } from './nova-noticia/nova-noticia.component';
import { FormNoticiaComponent } from './form-noticia/form-noticia.component';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavMenuComponent,
    CardComponent,
    BodyComponent,
    HomeComponent,
    NoticiaComponent,
    NovaNoticiaComponent,
    FormNoticiaComponent,
    EditarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
