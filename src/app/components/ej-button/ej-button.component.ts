import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ej-button',
  templateUrl: './ej-button.component.html',
  styleUrls: ['./ej-button.component.scss'],
})
export class EjButtonComponent {
  constructor(private el: ElementRef) {}

  @Input() text: string = '';
  @Input() click!: () => void;
}
