import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ej-button',
  templateUrl: './ej-button.component.html',
  styleUrls: ['./ej-button.component.scss'],
})
export class EjButtonComponent {
  @Input() text: string = '';
}
