import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-project-group-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './project-group.component.html',
  styleUrl: './project-group.component.scss'
})
export class ProjectGroupSectionComponent {

}
