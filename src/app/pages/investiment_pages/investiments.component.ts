import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtomAddProjectComponent } from '../../../shared/components/buttom-add-project/buttom-add-project.component';
import { IUser } from '../../../shared/model/IUser.models';
import { UserService } from '../../../shared/services/user/user.service';
import { Router, RouterModule } from '@angular/router';
import { HomeInvesterComponent } from './home_invester/home.component';

@Component({
  selector: 'app-investiments',
  standalone: true,
  imports: [
    CardComponent,
    ButtomAddProjectComponent,
    RouterModule,
    HomeInvesterComponent
    // ScheduleComponent
  ],
  templateUrl: './investiments.component.html',
  styleUrl: './investiments.component.scss'
})
export class InvestimentComponent implements OnInit {

  user!: IUser;

  constructor( private serviceUser: UserService, 
    private route: Router
  ){}

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(): void {
    const id = 14;
    this.serviceUser.getUser(id).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error('Erro ao obter usuário:', error);
      }
    );
  }

  nav_items = [
    {icon: 'home-icon.svg',label:'Página Inicial', page:'home'},
    {icon: 'perfil-icon.svg',label:'Perfil', page:'profile'},
  ];

  goLogin(){
    this.route.navigate(['login']);
  }

}
