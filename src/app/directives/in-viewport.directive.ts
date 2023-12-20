import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInViewport]',
})
export class InViewportDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.addOrRemoveAnimateClass();
  }

  private addOrRemoveAnimateClass(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    const rect = element.getBoundingClientRect();
    const scrollPosition =
      window.pageXOffset || document.documentElement.scrollLeft;

    // Adjust these values according to your specific layout and requirements
    const isInViewport =
      rect.left >= scrollPosition &&
      rect.right <= window.innerWidth + scrollPosition;

    if (isInViewport) {
      this.renderer.addClass(element, 'animate');
    } else {
      this.renderer.removeClass(element, 'animate');
    }
  }
}
