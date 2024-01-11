import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() image_url: string = ''
  @Input() title: string = ''
  @Input() resume: string = ''
  @Input() autor: string = ''
  @Input() tags: string[] = []

}
