import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './pages/api/api.service';
import { HomeComponent } from './pages/home/home.component';
import { ButtomAddProjectComponent } from '../shared/components/buttom-add-project/buttom-add-project.component';
import { CardComponent } from '../shared/components/card/card.component';
import { FormModalComponent } from '../shared/components/form-modal/form-modal.component';
import { FormTestComponent } from '../shared/components/form-test/form-test.component';
import { MyProjectsSectionComponent } from '../shared/components/my-projects-section/my-projects.component';
import { MenuHorizontalComponent } from '../shared/components/template/menu-horizontal/menu-horizontal.component';
import { SidenavComponent } from '../shared/components/template/sidenav/sidenav.component';



const components = [
  HomeComponent,
  SidenavComponent,
  CardComponent,
  ButtomAddProjectComponent,
  MenuHorizontalComponent,
  MyProjectsSectionComponent,
  FormModalComponent,
  FormTestComponent
];


@Component({
    selector: 'app-root',
    standalone: true,
    providers: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        ApiService,
        FormsModule,
        CommonModule
       
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
}
