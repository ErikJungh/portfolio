import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  toggleLightMode(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const body = document.querySelector('body');

    if (body) {
      if (isChecked) {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
    }
  }
}
