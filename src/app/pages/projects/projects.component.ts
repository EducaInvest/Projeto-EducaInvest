import { Component } from '@angular/core';
import { ButtomAddProjectComponent } from '../../../shared/components/buttom-add-project/buttom-add-project.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ScheduleComponent } from '../../../shared/components/schedule/schedule.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardComponent,
    ButtomAddProjectComponent,
    ScheduleComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
