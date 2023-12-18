import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  animations: [
    trigger('textAnimation', [
      state('collapsed', style({ width: '80px' })), // Set your initial width value
      state('expanded', style({ width: '60px' })), // Set your expanded width value
      transition('collapsed <=> expanded', animate('300ms ease-out')),
    ]),
  ],
})
export class HistoryComponent {
  selectedIndex: number = -1;
  showContentIndex: number = -1;

  @ViewChild('timelineInfocard', { static: false })
  timelineInfocard!: ElementRef;

  timeLineItems: {
    title: string;
    body: string;
    subtitle: string;
    image: string;
  }[] = [
    {
      title: 'Telecomputing',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      subtitle: 'Stockholm, Kista',
      image: 'test',
    },
    {
      title: 'Visolit',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      subtitle: 'Stockholm, Kista',
      image: 'test',
    },
    {
      title: 'Amino Health',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      subtitle: 'Stockholm, Kista',
      image: 'test',
    },
    {
      title: 'Cytiva',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      subtitle: 'Stockholm, Kista',
      image: 'test',
    },
    {
      title: 'Swace Digital',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      subtitle: 'Stockholm, Kista',
      image: 'test',
    },
    {
      title: 'Intensogruppen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      subtitle: 'Stockholm, Kista',
      image: 'test',
    },
    {
      title: 'OMDA',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      subtitle: 'Stockholm, Kista',
      image: 'test',
    },
  ];

  infoCards: {
    title: string;
    body: string;
    tags: string[];
    image: string;
    subtitle: string;
  }[] = [
    {
      title: 'Support Technichian',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Powershell', 'Active Directory', 'Networking', 'Troubleshooting'],
      image: 'telecomputing_logo.jpeg',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Support Technichian',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Powershell', 'Active Directory', 'Networking', 'Troubleshooting'],
      image: 'test',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Software Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'C++'],
      image: 'test',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Content Data Manager',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Python', 'AutoHotKey', 'Excel'],
      image: 'test',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Software Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React.js', 'MySQL', 'HTML', 'SASS', 'SCSS', 'Docker', 'AWS'],
      image: 'test',
      subtitle: 'String',
    },
    {
      title: '.NET Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: [
        'C#',
        'Angular',
        'Typescript',
        'SQLServer',
        'Azure',
        'HTML',
        'SCSS',
      ],
      image: 'test',
      subtitle: 'String',
    },
    {
      title: 'Fullstack Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      image: 'test',
      subtitle: 'String',
    },
  ];
  constructor(private renderer: Renderer2) {}

  setSelectedIndex(index: number) {
    this.selectedIndex = index;
    console.log('selected', this.selectedIndex);
    setTimeout(() => {
      this.showContentIndex = this.selectedIndex;
    }, 500);
  }
}
