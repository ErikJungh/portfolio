import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
  Renderer2,
} from '@angular/core';

declare function Di(): any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @ViewChild('carousel', { static: true }) carousel: ElementRef | undefined;

  activeIndex: number = 1;

  scrollToSection(targetSectionId: string) {
    const targetEl =
      this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollPage(index: number) {
    const carousel = this.el.nativeElement.querySelector('.carousel__viewport');
    if (carousel) {
      const slide = this.el.nativeElement.querySelector(
        `#carousel__slide${index}`
      );
      if (slide) {
        const scrollTo = slide.offsetLeft;
        carousel.scrollTo({ left: scrollTo, behavior: 'smooth' });

        // Adding a listener for the 'scroll' event to detect when the scrolling is completed
        carousel.addEventListener(
          'scroll',
          this.checkScrollComplete.bind(this)
        );
      }
    }
  }

  checkScrollComplete() {
    const carousel = this.el.nativeElement.querySelector('.carousel__viewport');
    if (carousel) {
      carousel.removeEventListener(
        'scroll',
        this.checkScrollComplete.bind(this)
      ); // Remove the scroll event listener
      this.checkElementsInViewport();
    }
  }

  ngOnInit(): void {
    // Set the height of the hero to a fixed height initially
    const screenHeight = window.innerHeight;

    let element = document.getElementById('carousel');
    if (element) {
      this.renderer.setStyle(element, 'height', `${screenHeight * 0.95}px`);
    }

    this.checkElementsInViewport();
    this.scrollPage(1);
  }

  checkElementsInViewport(): void {
    const elementsToAnimate = this.el.nativeElement.querySelectorAll(
      '.appear-from-bottom-primary, .appear-from-bottom-secondary, .appear-from-bottom-tertiary'
    );

    elementsToAnimate.forEach((element: any) => {
      const rect = element.getBoundingClientRect();
      const elementInView =
        rect.left >= 0 &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);
      if (elementInView) {
        if (element.id) {
          this.activeIndex = parseInt(element.id);
        }
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  }
}
