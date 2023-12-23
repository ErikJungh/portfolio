import { animate } from '@angular/animations';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
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
      btnText: 'Till repo',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till repo',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till repo',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Till repo',
    },
  ];

  scrollToSection(increment: number) {
    this.currentSection += increment;
    this.currentSection =
      this.currentSection < 0
        ? this.projects.length - 1
        : this.currentSection % this.projects.length;
    const targetEl = this.el.nativeElement.ownerDocument.getElementById(
      'projectContainer' + this.currentSection
    );

    if (targetEl) {
      console.log('scrolling');
      window.scrollBy(1, 2);
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }
}
