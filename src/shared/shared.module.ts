import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { HttpService } from './services/http/http.service';
import { FormService } from './services/form/form.service';

import { CardComponent } from './components/card/card.component';
import { ButtomAddProjectComponent } from './components/buttom-add-project/buttom-add-project.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { MyProjectsSectionComponent } from './components/my-projects-section/my-projects.component';
import { ProjectGroupSectionComponent } from './components/project-group-section/project-group.component';
import { ScheduleSectionComponent } from './components/schedule-section/schedule-section.component';
import { MenuHorizontalComponent } from './components/template/menu-horizontal/menu-horizontal.component';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';

const components =  [   
    CardComponent,
    ButtomAddProjectComponent,
    FormModalComponent,
    MyProjectsSectionComponent,
    ProjectGroupSectionComponent,
    ScheduleSectionComponent,
    MenuHorizontalComponent,
    SidenavComponent
]

const services = [
    FormService,
    HttpService
]

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Validators,
        RouterModule,
        HttpClientModule,

    ], //modulos
    exports: [...components],
    declarations: [ ...components], //componentes
    providers: [
        ...services,
        provideHttpClient(withFetch())
    ], //serviços
})
export class SharedModule { }
