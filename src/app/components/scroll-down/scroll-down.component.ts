import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss'],
})
export class ScrollDownComponent {
  constructor(private el: ElementRef) {}
  scrollToSection(targetSectionId: string) {
    const targetEl =
      this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
        scrollIntoViewOptions: {
          block: 'start',
          inline: 'start',
          behavior: 'smooth',
          offsetTop: 1000,
        },
      });
    }
  }
}
