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
      body: 'Jag började min resa inom IT direkt efter gymnasiet som IT-Tekniker på Telecomputing i Stockholm. Under min tid på telecomputing har jag arbetat mycket med programvara och nätverksproblem inom medtech med mera.',
      tags: [
        'Powershell',
        'Windows Server 2008',
        'Active Directory',
        'Networking',
        'Troubleshooting',
      ],
      subtitle: 'Stockholm, Kista',
      timeLine: 'Juli 2017 - Juli 2018',
      image: 'telecomputing_logo.webp',
    },
    {
      title: 'Visolit',
      role: 'Support Technichian',
      body: 'Paralellt med mina första år av studier jobbade jag med kontohantering, programvara och nätverk relaterat till sjukvård, kollektivtraffik och allvaruhandel. ',
      tags: [
        'Powershell',
        'Windows Server 2008',
        'Active Directory',
        'Networking',
        'Troubleshooting',
      ],

      subtitle: 'Stockholm, Kista',
      timeLine: 'Juni 2019 - Augusti 2019',
      image: 'visolit_logo_small.webp',
    },
    {
      title: 'Amino Health',
      role: 'Software Developer',
      body: 'Som en del av mitt kandidatarbete arbetade jag som utvecklare i ett team av 4 andra där jag utvecklade en cross-platform mobilapplikation i Flutter som hette Quantify. Quantify användes av privatpersoner för att logga mat och träningsrutiner samt blodsocker genom en extern läsare.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'C++'],
      subtitle: 'Uppsala',
      timeLine: 'Mars 2020 - Juni 2020',
      image: 'amino_health_logo.jpeg',
    },
    {
      title: 'Cytiva',
      role: 'Product Data Manager',
      body: 'Under mitten av mina studier arbetade jag på Cytiva med att utveckla en automatisk lösning för att identifiera felkategoriseringar i deras lagersystem.',
      tags: ['Python', 'AutoHotKey', 'Excel'],
      subtitle: 'Uppsala',
      timeLine: 'Juni 2021 - Augusti 2021',
      image: 'cytiva_logo_small.webp',
    },
    {
      title: 'Swace Digital',
      role: 'Konsult',
      body: 'Jag arbetade under mitt fjärde år som konsult genom Swace Digital i Uppsala.',
      tags: [],
      subtitle: 'Uppsala',
      timeLine: 'Maj 2022 - September 2022',
      image: 'swace_logo.webp',
    },
    {
      title: 'Rädda baren',
      role: 'Software Developer',
      body: 'Jag arbetade som konsult genom Swace Digital hos Rädda barnen där jag utvecklade en resursportal tillsammans med två andra utvecklare.',
      tags: ['React.js', 'MySQL', 'HTML', 'SASS', 'SCSS', 'Docker', 'AWS'],
      subtitle: 'Uppsala',
      timeLine: 'Maj 2022 - September 2022',
      image: 'savethechildren_logo_small.webp',
      parentImage: 'swace_logo.webp',
    },
    {
      title: 'Intensogruppen',
      role: '.NET Developer',
      body: 'Under mitt sista år som student i Uppsala jobbade jag 50% som .NET utvecklare för intensogruppen med att utveckla ett avancerat webb-baserat rekryteringsverktyg. Jag arbetade tillsammans med två andra utvecklare och hade en roll med mycket ansvar.',
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
      timeLine: 'September 2022 - Augusti 2023',
      image: 'intensogruppen_logo.webp',
    },
    {
      title: 'Uppsala Universitet',
      role: 'Civiliningenjör Informationsteknik - Mjukvaruutveckling',
      body: 'I Juni 2023 slutförde jag mitt examensarbete hos Intensogruppen och tog min Civilingenjörsexamen inom IT med fokus på Mjukvaruutveckling på Uppsala Universitet.',
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
      body: 'Efter min examen flyttade jag till Göteborg och började arbeta som IT Konsult på Sylog Väst.',
      tags: [],
      subtitle: 'Göteborg',
      timeLine: 'Augusti 2023 - Nu',
      image: 'sylog_logo.webp',
    },
    {
      title: 'OMDA',
      role: 'Full-Stack Developer',
      body: 'Jag arbetade som Full-Stack utvecklare hos OMDA (f.d. CSAM) genom Sylog Väst. På Omda har jag varit delaktig i ett flertal system kopplade till ambulansteknik i form av exemplevis navigationssystem och larmsystem.',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      subtitle: 'Göteborg',
      timeLine: 'Augusti 2023 - December 2023',
      image: 'omda_logo.webp',
      parentImage: 'sylog_logo.webp',
    },
    {
      title: 'Autoliv',
      role: 'iOS and Android Developer',
      body: 'I Januari kommer jag att anta ett nytt uppdrag som iOS och Android utvecklare på Autoliv med fokus på att utveckla ett system för fordonsanalys.',
      tags: ['Swift', 'Kotlin', 'TBD'],
      subtitle: 'Göteborg',
      timeLine: 'Januari 2024 - Nu',
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
      body: 'Jag arbetade med att administera användarkonton i Citrix med hjälp av Active Directory. Jag ansvarade för administration av behörigheter, filrättigheter och mailkonton. Jag skötte också om ett antal Windows Servers.',
      tags: ['Powershell', 'Active Directory', 'Networking', 'Troubleshooting'],
      image: 'telecomputing_logo.webp',
      subtitle: 'Juli 2017 - Juli 2018',
    },
    {
      title: 'Support Technichian',
      body: 'Jag arbetade med att administera användarkonton i Citrix med hjälp av Active Directory. Jag ansvarade för administration av behörigheter, filrättigheter och mailkonton. Jag skötte också om ett antal Windows Servers.',
      tags: ['Powershell', 'Active Directory', 'Networking', 'Troubleshooting'],
      image: 'visolit_logo.webp',
      subtitle: 'Juni 2019 - Augusti 2019',
    },
    {
      title: 'Software Developer',
      body: 'jag utvecklade en cross platform mobilapplikation i Flutter med hjälp av Firebase Firestore och autentisiering i Google Authentication. Jag hanterade även läsning till en extern sensor med hjälp av NFC direkt till appen.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'C++'],
      image: 'visolit_logo.webp',
      subtitle: 'Mars 2020 - Juni 2020',
    },
    {
      title: 'Content Data Manager',
      body: 'Jag blev ombedd att se till att hundra-tusentals föremål i företagets produktdatabas var inlagda på rätt sätt. Då jag ansåg att detta kunde automatiseras så skrev jag ett script med hjälp abv Python och AHK för att direkt sköta denna felhantering vilket fungerade perfekt.',
      tags: ['Python', 'AutoHotKey', 'Excel'],
      image: 'cytiva_logo.webp',
      subtitle: 'Juni 2021 - Augusti 2021',
    },
    {
      title: 'IT Konsult',
      body: 'Jag arbetade som konsult på Swace digital och hade flera uppdrag men det huvudsakliga jag gjorde var att arbeta för Rädda Barnen.',
      tags: [],
      image: 'swace_logo.webp',
      subtitle: 'May 2018 - Augusti 2019',
    },
    {
      title: 'Software Developer',
      body: 'Rädda barnen har en resursportal som används av tusentals personer världen över. Jag vidareutvecklade systemet genom att förbättra sökmotorn och användargränssnittet. Jag utvecklade även ett script i PHP för att identifera när vissa av tusentals länkar på sidan blev otillgängliga av olika skäl.',
      tags: ['React.js', 'MySQL', 'HTML', 'SASS', 'SCSS', 'Docker', 'AWS'],
      image: 'savethechildren_logo.webp',
      subtitle: 'Maj 2022 - September 2022',
      projects: [
        {
          title: 'Save the Children Resource Centre',
          url: 'resourcecentre.savethechildren.com',
        },
      ],
    },
    {
      title: '.NET Developer',
      body: 'Jag utvecklade Intensogruppens Kandidatportal från start till lansering. Kandidatportalen är skriven i .NET med C# och Angular och bygger på Microfrontends som hostas i Azure.',
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
      subtitle: 'September 2022 - Augusti 2023',
      projects: [
        {
          title: 'Masterhelp Candidate Portal',
          url: 'candidate.masterhelp.se',
        },
      ],
    },
    {
      title: 'Uppsala Universitet',
      body: 'Jag avklarade alla mina kurser på Uppsala Universitets Civilingenjörsprogram inom IT inom det förväntade tidsspannet på 5 år och fick min examen 2023.',
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
      body: 'jag flyttade till Göteborg i Augusti 2023 för att börja arbeta som IT Konsult på Sylog Väst. Hos Sylog har jag haft uppdrag hos Omda och Autoliv och certifierat mig som Azure Administratör.',
      tags: [],
      image: 'sylog_logo.webp',
      subtitle: 'Augusti 2023 - Nu',
    },
    {
      title: 'Fullstack Developer',
      body: 'Hos Omda har jag utvecklad flera olika system som exempelvis en mobilapplikation i Android tillsammans med en kollega för att hantera larm till sjukthus och ambulanser. Jag har även utvecklat karttjänster och navigationssystem till ambulansförare.',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      image: 'omda_logo.webp',
      subtitle: 'Augusti 2023 - December 2023',
    },
    {
      title: 'iOS and Android Developer',
      body: 'Jag har ännu inte arbetat länge nog på Autoliv för att ge en detaljerad beskrivning av mina arbetsupgifter. Kom gärna tillbaka en annan dag!',
      tags: ['Java', 'Android', 'C#', 'XML', 'C++', 'MySQL', 'Azure'],
      image: 'autoliv_logo.webp',
      subtitle: 'Januari 2024 - Nu',
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
