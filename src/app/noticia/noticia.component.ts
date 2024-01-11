import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../interfaces/noticai.interface';
import { data } from '../../data/news';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit{
  new?: Noticia
  id: number = 0

  constructor(private router: Router, private route: ActivatedRoute,) {
    
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
    this.new = data[this.id];
  }

  remover(id: number){
    data.splice(id!, 1);
    this.router.navigate(['/'])
  }
}
