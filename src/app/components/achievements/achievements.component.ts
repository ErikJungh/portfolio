import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent {
  @ViewChild('cardElement')
  cardElement!: ElementRef;
  isDarkMode: boolean = true;
  constructor(private renderer: Renderer2, public elementRef: ElementRef) {}

  ngOnInit() {
    this.checkBodyClass();
  }

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start your animations here
          this.playAnimations();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Start observing your card element
    observer.observe(this.cardElement.nativeElement);
  }

  playAnimations() {
    // Logic to trigger your animations
    // For example:
    // Add classes to start animations
    this.cardElement.nativeElement.classList.add('animate');
  }
  achievements: {
    title: string;
    body: string;
    subtitle: string;
    subSubtitle: string;
    image: string;
  }[] = [
    {
      title: 'Täby Enskilda Gymnasium',
      body: 'Här spenderade jag min gymnasietid.',
      subtitle: 'Inriktning Data & IT',
      subSubtitle: '2014 - 2017',
      image: 'teg.webp',
    },
    {
      title: 'Uppsala Universitet',
      body: 'Här läste jag vidare på universitetet.',
      subtitle:
        'Civilingenjör I Informationsteknologi med inriktning Mjukvaruutveckling',
      subSubtitle: '2018-2023',
      image: 'uppsala_universitet.webp',
    },
    {
      title: 'Azure Certified',
      body: 'jag har nyligen blivit certifierad Azure Administratör.',
      subtitle: 'Certifierad enligt AZ-104',
      subSubtitle: '2023',
      image: 'azure.png',
    },
  ];

  checkBodyClass(): void {
    const body = this.elementRef.nativeElement.ownerDocument.body;
    this.isDarkMode = body.classList.contains('dark');
  }
}
