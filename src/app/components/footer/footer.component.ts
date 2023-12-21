import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
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
