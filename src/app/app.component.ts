import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

import { SidenavComponent } from '../shared/components/template/sidenav/sidenav.component';
import { MenuHorizontalComponent } from '../shared/components/template/menu-horizontal/menu-horizontal.component';
import { CardComponent } from '../shared/components/card/card.component';
import { ProjectFormComponent } from '../shared/components/project-form/project-form.component';
import { ButtomAddProjectComponent } from '../shared/components/buttom-add-project/buttom-add-project.component';
import { MatTableDataSource } from '@angular/material/table';
// import { ScheduleComponent } from '../shared/components/schedule/schedule.component';

const components = [
  HomeComponent,
  UserProfileComponent,
  SidenavComponent,
  CardComponent,
  ButtomAddProjectComponent,
  MenuHorizontalComponent,
  ProjectFormComponent,
  UserProfileComponent, 
  // ScheduleComponent
  
];

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        MatSlideToggleModule,
        MatTableDataSource
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        ...components,
        RouterOutlet,
    ]
})


export class AppComponent {
constructor(){}

  title = 'projeto-educainvest';

  userData = {
    firstName: 'John',
    lastName: 'Doe',
    userType: 'Estudante',
    email: 'john.doe@example.com',
    phone: '123456789',
    city: 'São Paulo',
    state: 'SP',
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe' },
      { platform: 'GitHub', url: 'https://github.com/johndoe' }
    ],
    creationDate: '2022-01-01',
    lastUpdateDate: '2022-05-20'
  };
}