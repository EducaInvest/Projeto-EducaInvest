import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtomAddProjectComponent } from '../../../shared/components/buttom-add-project/buttom-add-project.component';
import { MyProjectsSectionComponent } from '../../../shared/components/my-projects-section/my-projects.component';
import { ProjectGroupSectionComponent } from '../../../shared/components/project-group-section/project-group.component';
import { CronogramSectionComponent } from '../../../shared/components/cronogram-section/cronogram-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    ButtomAddProjectComponent,
    MyProjectsSectionComponent,
    ProjectGroupSectionComponent,
    CronogramSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {

  }



}
