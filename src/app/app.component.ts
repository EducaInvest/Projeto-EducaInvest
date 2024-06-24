import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { IndexComponent } from './pages/index.component';
import { InvestimentComponent } from './pages/investiment_pages/investiments.component';
import { HomeInvesterComponent } from './pages/investiment_pages/home_invester/home.component';
// import { MyProjectsSectionComponent } from '../shared/components/my-projects-section/my-projects.component';
//import { FormService } from '../shared/services/form/form.service';


// const components = [
//   LoginComponent,
//   SignUpComponent,
// ];



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
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        // ...components,
        // SignUpComponent,
        RouterOutlet,
        IndexComponent,
        InvestimentComponent,
        HomeInvesterComponent
        // FooterComponent,
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