import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appCenterInView]',
})
export class SelectedDirective implements AfterViewInit {
  @Output() centerInView: EventEmitter<HTMLElement | null> =
    new EventEmitter<HTMLElement | null>();

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { threshold: 0 }
    );

    observer.observe(this.elementRef.nativeElement);
  }

  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      const elem = entry.target as HTMLElement;
      const elemRect = elem.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const elemCenter = elemRect.top + elemRect.height / 2;

      if (elemCenter >= 0 && elemCenter <= viewportHeight) {
        this.centerInView.emit(elem);
        return;
      }
    });

    this.centerInView.emit(null); // No element found at the center
  }
}
