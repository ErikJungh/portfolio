import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: {
    title: string;
    subtitle: string;
    body: string;
    tags: string[];
    btnText: string;
  }[] = [
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Visa kod',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Visa kod',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Visa kod',
    },
    {
      title: 'Plain Sight',
      subtitle: 'Se åsikter över hela världen',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.',
      tags: ['React Native', 'Google Cloud', 'Native Base'],
      btnText: 'Visa kod',
    },
  ];
}
