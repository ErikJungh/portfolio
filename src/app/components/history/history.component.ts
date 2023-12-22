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
  fullHistoryExpanded: boolean = false;
  previewLength: number = 4;
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
    parentImage?: string;
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
      image: 'amino_health_logo.jpeg',
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
      role: 'Konsult',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: [],
      subtitle: 'Uppsala',
      timeLine: 'May 2010 - August 2020',
      image: 'swace_logo.webp',
    },
    {
      title: 'Rädda baren',
      role: 'Software Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React.js', 'MySQL', 'HTML', 'SASS', 'SCSS', 'Docker', 'AWS'],
      subtitle: 'Uppsala',
      timeLine: 'May 2010 - August 2020',
      image: 'savethechildren_logo_small.webp',
      parentImage: 'swace_logo.webp',
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
      title: 'Uppsala Universitet',
      role: 'Civiliningenjör Informationsteknik - Mjukvaruutveckling',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: [
        'React Native',
        'Java',
        'C',
        'Typescript',
        'Javascript',
        'Flutter',
        'SQL',
        'Scrum',
      ],
      subtitle: 'Uppsala',
      timeLine: 'Augusti 2018 - Juni 2023',
      image: 'uppsala_logo_small.webp',
    },

    {
      title: 'Sylog Väst AB',
      role: 'Konsult',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: [],
      subtitle: 'Göteborg',
      timeLine: 'May 2010 - August 2020',
      image: 'sylog_logo.webp',
    },
    {
      title: 'OMDA',
      role: 'Full-Stack Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      subtitle: 'Göteborg',
      timeLine: 'May 2010 - August 2020',
      image: 'omda_logo.webp',
      parentImage: 'sylog_logo.webp',
    },
    {
      title: 'Autoliv',
      role: 'iOS and Android Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Swift', 'Kotlin', 'TBD'],
      subtitle: 'Göteborg',
      timeLine: 'May 2010 - August 2020',
      image: 'autoliv_logo_small.webp',
      parentImage: 'sylog_logo.webp',
    },
  ];

  infoCards: {
    title: string;
    body: string;
    tags: string[];
    image: string;
    subtitle: string;
    projects?: { title: string; url: string }[];
  }[] = [
    {
      title: 'Support Technichian',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Powershell', 'Active Directory', 'Networking', 'Troubleshooting'],
      image: 'telecomputing_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Support Technichian',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Powershell', 'Active Directory', 'Networking', 'Troubleshooting'],
      image: 'visolit_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Software Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'C++'],
      image: 'visolit_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Content Data Manager',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Python', 'AutoHotKey', 'Excel'],
      image: 'cytiva_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'IT Konsult',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: [],
      image: 'swace_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Software Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React.js', 'MySQL', 'HTML', 'SASS', 'SCSS', 'Docker', 'AWS'],
      image: 'savethechildren_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
      projects: [
        {
          title: 'Save the Children Resource Centre',
          url: 'resourcecentre.savethechildren.com',
        },
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
      title: 'Uppsala Universitet',
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
      image: 'uppsala_logo.webp',
      subtitle: 'Augusti 2018 - Juni 2023',
      projects: [],
    },
    {
      title: 'IT Konsult',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: [],
      image: 'sylog_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Fullstack Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      image: 'omda_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'iOS and Android Developer',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      image: 'autoliv_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
  ];
  constructor(private renderer: Renderer2, private el: ElementRef) {}

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

  toggleShowMore() {
    console.log('toggle', this.fullHistoryExpanded);
    this.fullHistoryExpanded = !this.fullHistoryExpanded;

    if (!this.fullHistoryExpanded) {
      const targetEl =
        this.el.nativeElement.ownerDocument.getElementById('history');
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'instant',
          block: 'start',
          inline: 'start',
        });
      }
    }
  }
}
