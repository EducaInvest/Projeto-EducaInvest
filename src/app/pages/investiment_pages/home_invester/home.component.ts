import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { RouterModule } from '@angular/router';
// import { ScheduleComponent } from '../../../shared/components/schedule/schedule.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    RouterModule
  ],
  templateUrl: './home_invester.component.html',
  styleUrl: './home_invester.component.scss'
})
export class HomeInvesterComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {

  }
}
