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

  onToggleColorModeClick(): void {
    this.toggleColorModeClick.emit();
  }
  @Input() toggleColorMode: (() => void) | undefined;
  colorMode: boolean = false;
  isDarkMode: boolean = false;
}
