import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NovaNoticiaComponent } from './nova-noticia/nova-noticia.component';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'noticia/:id', component: NoticiaComponent },
  { path: 'nova', component: NovaNoticiaComponent },
  { path: 'editar/:id', component: EditarNoticiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
