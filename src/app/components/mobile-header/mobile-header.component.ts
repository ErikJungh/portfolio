import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0',
          opacity: '0',
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: '1',
          overflow: 'visible',
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
    trigger('rotateAnimation', [
      state(
        'rotated',
        style({
          transform: 'rotate(45deg)',
        })
      ),
      state(
        'notRotated',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      transition('notRotated <=> rotated', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class MobileHeaderComponent implements OnInit {
  @Input() isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    this.toggleBodyScroll(!this.isExpanded);
  }
  constructor(private el: ElementRef) {}
  scrollToSection(targetSectionId: string) {
    const targetEl =
      this.el.nativeElement.ownerDocument.getElementById(targetSectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onExpandChange(value: boolean) {
    this.isExpanded = value; // Update the value in the parent component
  }
  toggleBodyScroll(enableScroll: boolean) {
    if (enableScroll) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
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
    const scroll320vh = window.innerHeight; // Calculate 320vh in pixels

    // Check if scroll position is greater than or equal to 320vh
    this.isScrolledPastHero = scrollPosition >= scroll320vh;
  }

  ngOnInit() {}
}
