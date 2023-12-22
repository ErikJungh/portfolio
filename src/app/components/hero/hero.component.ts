import {
  Component,
  Renderer2,
  ElementRef,
  Inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Output() toggleColorModeClick: EventEmitter<void> = new EventEmitter<void>();
  constructor(private el: ElementRef) {}

  onToggleColorModeClick(): void {
    this.toggleColorModeClick.emit();
  }
  @Input() toggleColorMode: (() => void) | undefined;
  colorMode: boolean = false;
  isDarkMode: boolean = false;

  scrollToContact() {
    console.log('called');
    const targetEl =
      this.el.nativeElement.ownerDocument.getElementById('contact');
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
