import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { FormService } from './services/form/form.service';

import { ProjectFormComponent } from './components/project-form/project-form.component';
import { CardComponent } from './components/card/card.component';
import { ButtomAddProjectComponent } from './components/buttom-add-project/buttom-add-project.component';
// import { ScheduleComponent } from './components/schedule/schedule.component';

import { MenuHorizontalComponent } from './components/template/menu-horizontal/menu-horizontal.component';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';

import { TResource } from './components/t-resource/t-resource.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleComponent } from './components/schedule/schedule.component';

// import { ButtonDotsComponent } from './components/butoon-icon-dots/button-icon-dots.component';

const components =  [   
    CardComponent,
    ButtomAddProjectComponent,
    ProjectFormComponent,
    ScheduleComponent,
    MenuHorizontalComponent,
    SidenavComponent, 
    // ButtonDotsComponent
]

const services = [
    FormService,
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
        MatButtonModule, 
        MatMenuModule, 
        MatIconModule,
        MatDialog

    ], //modulos
    exports: [...components],
    declarations: [ ...components], //componentes
    providers: [
        ...services,
        provideHttpClient(withFetch())
    ], //serviços
})
export class SharedModule { }
