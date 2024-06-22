import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtomAddProjectComponent } from '../../../shared/components/buttom-add-project/buttom-add-project.component';
import { ScheduleComponent } from '../../../shared/components/schedule/schedule.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    ButtomAddProjectComponent,
    ScheduleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {

  }
}
