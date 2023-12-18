import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  selectedIndex: number = -1;

  @ViewChild('timelineInfocard', { static: false })
  timelineInfocard!: ElementRef;

  constructor(private renderer: Renderer2) {}

  // This method gets called when selectedIndex changes

  setSelectedIndex(index: number) {
    if (this.selectedIndex == index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }
}
