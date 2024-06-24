import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../model/IUser.models';
import { UserService } from '../../../services/user/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{

  user!: IUser;

  constructor( private serviceUser: UserService){}

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(): void {
    const id = 28;
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
    {icon: 'projetos-icon.svg',label:'Projetos', page:'project'},
    {icon: 'negocios-icon.svg',label:'Meus Negócios'},
    {icon: 'config-icon.svg',label:'Configurações'},
  ];

}