import { Component, OnInit } from '@angular/core';
import { ButtomAddProjectComponent } from '../../shared/components/buttom-add-project/buttom-add-project.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ProjectFormComponent } from '../../shared/components/project-form/project-form.component';
import { MenuHorizontalComponent } from '../../shared/components/template/menu-horizontal/menu-horizontal.component';
import { SidenavComponent } from '../../shared/components/template/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterOutlet } from '@angular/router';



const components = [
    // HomeComponent,
    UserProfileComponent,
    SidenavComponent,
    // CardComponent,
    ButtomAddProjectComponent,
    MenuHorizontalComponent,
    // MyProjectsSectionComponent,
    ProjectFormComponent,
  ];

@Component({
    selector: 'app-index',
    templateUrl: 'index.component.html',
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