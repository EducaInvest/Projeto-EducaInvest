import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtomAddProjectComponent } from '../../../shared/components/buttom-add-project/buttom-add-project.component';
import { ScheduleSectionComponent } from '../../../shared/components/schedule-section/schedule-section.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    ButtomAddProjectComponent,
    ScheduleSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {

  }
}
