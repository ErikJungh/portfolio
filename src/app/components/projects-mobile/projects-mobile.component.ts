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
  }[] = [
    {
      title: 'Plain Sight',
      subtitle: 'Cross Platform Mobile App',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till Repo',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till Repo',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till Repo',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till Repo',
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