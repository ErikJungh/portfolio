import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInViewport]',
})
export class InViewportDirective {
  private intersectionObserver!: IntersectionObserver;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01,
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateElement();
          this.intersectionObserver.unobserve(this.elementRef.nativeElement);
        }
      });
    }, options);

    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private animateElement() {
    // Add your animation class here
    setTimeout(() => {
      this.renderer.addClass(this.elementRef.nativeElement, 'animate');
    }, 300);
  }
}
