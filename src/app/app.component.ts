import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from '../shared/components/card/card.component';
import { ButtomAddProjectComponent } from '../shared/components/buttom-add-project/buttom-add-project.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MenuHorizontalComponent } from '../shared/components/menu-horizontal/menu-horizontal.component';
import { MyProjectsSectionComponent } from '../shared/components/my-projects-section/my-projects.component';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';


const components = [
  HomeComponent,
  SidenavComponent,
  CardComponent,
  ButtomAddProjectComponent,
  MenuHorizontalComponent,
  MyProjectsSectionComponent
];

const modules = [
  CommonModule,
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ...components,
    ...modules,
    RouterOutlet
  ],
providers: [BrowserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
constructor(){}

  title = 'projeto-educainvest';
}
