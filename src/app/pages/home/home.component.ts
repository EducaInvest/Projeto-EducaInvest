import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtomAddProjectComponent } from '../../../shared/components/buttom-add-project/buttom-add-project.component';
import { MyProjectsSectionComponent } from '../../../shared/components/my-projects-section/my-projects.component';
import { ProjectGroupSectionComponent } from '../../../shared/components/project-group-section/project-group.component';
import { ScheduleSectionComponent } from '../../../shared/components/schedule-section/schedule-section.component';
import { FormModalComponent } from '../../../shared/components/form-modal/form-modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    ButtomAddProjectComponent,
    MyProjectsSectionComponent,
    ProjectGroupSectionComponent,
    ScheduleSectionComponent,
    FormModalComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {

  }



}
