import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-projects-mobile',
  templateUrl: './projects-mobile.component.html',
  styleUrls: ['./projects-mobile.component.scss'],
})
export class ProjectsMobileComponent {
  @ViewChildren('carousel', { read: ElementRef })
  elements!: QueryList<ElementRef>;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  currentSection: number = 0;
  projects: {
    title: string;
    subtitle: string;
    body: string;
    tags: string[];
    btnText: string;
    images: string[];
  }[] = [
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Jag skapade Plainsight som ett startup tillsammans med två vänner. Plainsight är tänkt att vara ett sätt för folk att visa platsbaserade åsikter om alla möjliga ämnen över hela världen. Appens frontend är helt utvecklad utav mig med hjälp av React Native.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till repo',
      images: ['plainsight1.svg', 'plainsight2.svg', 'plainsight3.svg'],
    },
    {
      title: 'Quantify Bio',
      subtitle: 'Studera ditt blodsocker',
      body: 'Jag utvecklade Quantify Bio som en del av mitt kandidatarbete. Appen är utvecklad i Flutter och ger användaren möjligheten att logga sina tränings och matvanor för att sedan jämföra dessa med blodsocker. Blodsockret läses in via NFC från en extern sensor som sitter i armen.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
      btnText: 'Till repo',
      images: ['quantify1.svg', 'quantify2.svg', 'quantify3.svg'],
    },
    {
      title: 'Plain Sight',
      subtitle: 'Håll koll på vad du äter',
      body: 'Jag utvecklade Vegify parallelt med mina studier för att hjälpa folk att identfiera allergier i matvaror. Användaren kan scanna sträckkoden eller manuellt söka efter matvaror för att se ingredienser och få varningar om allergener. Användaren kan även skapa, dela och söka bland recept efter allergener.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till repo',
      images: ['vegify1.svg', 'vegify2.svg', 'vegify3.svg'],
    },
  ];

  scrollToSection(increment: number) {
    this.currentSection += increment;
    this.currentSection =
      this.currentSection < 0
        ? this.projects.length - 1
        : this.currentSection % this.projects.length;

    this.elements.forEach((element, i) => {
      if (this.currentSection === i) {
        element.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'end',
        });
      }
    });
  }
}
