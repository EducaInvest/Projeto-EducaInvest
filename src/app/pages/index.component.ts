import { Component, OnInit } from '@angular/core';
import { ButtomAddProjectComponent } from '../../shared/components/buttom-add-project/buttom-add-project.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ProjectFormComponent } from '../../shared/components/project-form/project-form.component';
import { MenuHorizontalComponent } from '../../shared/components/template/menu-horizontal/menu-horizontal.component';
import { SidenavComponent } from '../../shared/components/template/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';



const components = [
    HomeComponent,
    UserProfileComponent,
    SidenavComponent,
    CardComponent,
    ButtomAddProjectComponent,
    MenuHorizontalComponent,
    // MyProjectsSectionComponent,
    ProjectFormComponent,
    ProjectsComponent
  ];

@Component({
    selector: 'app-index',
    templateUrl: 'index.component.html',
    styleUrl: './index.component.scss',
    imports: [
        ...components,
        RouterOutlet
    ],
    standalone: true
})

export class IndexComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}