import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }
  
  nav_items = [
    {icon: 'home-icon.svg',label:'Página Inicial', page:'home'},
    {icon: 'perfil-icon.svg',label:'Perfil', page:'profile'},
    {icon: 'projetos-icon.svg',label:'Projetos', page:'project'},
    {icon: 'negocios-icon.svg',label:'Meus Negócios'},
    {icon: 'config-icon.svg',label:'Configurações'},
  ];

}