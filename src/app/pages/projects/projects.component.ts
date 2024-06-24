import { Component } from '@angular/core';
import { ButtomAddProjectComponent } from '../../../shared/components/buttom-add-project/buttom-add-project.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardComponent,
    ButtomAddProjectComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
