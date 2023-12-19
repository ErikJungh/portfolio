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
    role: string;
    body: string;
    tags: string[];
    subtitle: string;
    timeLine: string;
    image: string;
  }[] = [
    {
      title: 'Telecomputing',
      role: 'Support Technichian',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: [
        'Powershell',
        'Windows Server 2008',
        'Active Directory',
        'Networking',
        'Troubleshooting',
      ],
      subtitle: 'Stockholm, Kista',
      timeLine: 'May 2010 - August 2020',
      image: 'telecomputing_logo.webp',
    },
    {
      title: 'Visolit',
      role: 'Support Technichian',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: [
        'Powershell',
        'Windows Server 2008',
        'Active Directory',
        'Networking',
        'Troubleshooting',
      ],

      subtitle: 'Stockholm, Kista',
      timeLine: 'May 2010 - August 2020',
      image: 'visolit_logo_small.webp',
    },
    {
      title: 'Amino Health',
      role: 'Software Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'C++'],
      subtitle: 'Uppsala',
      timeLine: 'May 2010 - August 2020',
      image: 'visolit_logo_small.webp',
    },
    {
      title: 'Cytiva',
      role: 'Product Data Manager',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Python', 'AutoHotKey', 'Excel'],
      subtitle: 'Uppsala',
      timeLine: 'May 2010 - August 2020',
      image: 'cytiva_logo_small.webp',
    },
    {
      title: 'Swace Digital',
      role: 'Uppsala',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React.js', 'MySQL', 'HTML', 'SASS', 'SCSS', 'Docker', 'AWS'],
      subtitle: 'Uppsala',
      timeLine: 'May 2010 - August 2020',
      image: 'swace_logo.webp',
    },
    {
      title: 'Intensogruppen',
      role: '.NET Developer',
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
      subtitle: 'Göteborg',
      timeLine: 'May 2010 - August 2020',
      image: 'intensogruppen_logo.webp',
    },
    {
      title: 'OMDA',
      role: 'Full-Stack Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      subtitle: 'Göteborg',
      timeLine: 'May 2010 - August 2020',
      image: 'omda_logo.webp',
    },
  ];

  infoCards: {
    title: string;
    body: string;
    tags: string[];
    image: string;
    subtitle: string;
    projects: { title: string; url: string }[];
  }[] = [
    {
      title: 'Support Technichian',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Powershell', 'Active Directory', 'Networking', 'Troubleshooting'],
      image: 'telecomputing_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
      projects: [],
    },
    {
      title: 'Support Technichian',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Powershell', 'Active Directory', 'Networking', 'Troubleshooting'],
      image: 'visolit_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
      projects: [],
    },
    {
      title: 'Software Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'C++'],
      image: 'visolit_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
      projects: [],
    },
    {
      title: 'Content Data Manager',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Python', 'AutoHotKey', 'Excel'],
      image: 'cytiva_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
      projects: [],
    },
    {
      title: 'Software Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React.js', 'MySQL', 'HTML', 'SASS', 'SCSS', 'Docker', 'AWS'],
      image: 'swace_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
      projects: [
        { title: 'Save the Children Resource Centre', url: 'stc.com' },
      ],
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
      image: 'intensogruppen_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
      projects: [
        {
          title: 'Masterhelp Candidate Portal',
          url: 'candidate.masterhelp.se',
        },
      ],
    },
    {
      title: 'Fullstack Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      image: 'omda_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
      projects: [],
    },
  ];
  constructor(private renderer: Renderer2) {}

  setSelectedIndex(index: number) {
    if (this.selectedIndex == index) {
      this.selectedIndex = -1;
      this.showContentIndex = this.selectedIndex;
    } else {
      this.selectedIndex = index;
      setTimeout(() => {
        this.showContentIndex = this.selectedIndex;
      }, 500);
    }
  }
}
