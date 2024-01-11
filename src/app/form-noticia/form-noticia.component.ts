import { Component, Input, OnInit } from '@angular/core';


import { Noticia } from '../../interfaces/noticai.interface';
import { data } from '../../data/news';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrl: './form-noticia.component.css'
})
export class FormNoticiaComponent implements OnInit {

  @Input() title = ''

  form!: Noticia

  id?: number | null = null

  constructor( private router: Router, private route: ActivatedRoute, ) {
    
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
    data[this.id];

    this.form = {

      image_url: data[this.id].image_url ?? '',
      title: data[this.id].title ?? '',
      resume: data[this.id].resume ?? '',
      autor: data[this.id].autor ?? '',
      tags: data[this.id].tags ?? [],
    }
  }

  salvar() {
    data.push(this.form);
    this.router.navigate(['/']);
  }

  editar(i: number){
    data[i] = this.form;
    this.router.navigate(['/noticia', i]);
  }

}
