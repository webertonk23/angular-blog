import { Component } from '@angular/core';
import { Noticia } from '../../interfaces/noticai.interface';
import { data } from '../../data/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  news: Noticia[] = []

  constructor( private router: Router ) {
    this.news = data;
  }

  verNoticia(noticia: number) {
    this.router.navigate(['/noticia', noticia]);
  }
}
