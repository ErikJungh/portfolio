import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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

  isScrolledPastHero = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const heightLimit = 0.01 * window.innerHeight; // Calculate 320vh in pixels

    // Check if scroll position is greater than or equal to 320vh
    this.isScrolledPastHero = scrollPosition >= heightLimit;
  }
}
