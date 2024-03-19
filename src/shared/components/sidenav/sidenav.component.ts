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
    {icon: 'perfil-icon.svg',label:'Perfil', page:'modal'},
    {icon: 'projetos-icon.svg',label:'Projetos', page:'projetos'},
    {icon: 'negocios-icon.svg',label:'Meus Negócios', page:'negocios'},
    {icon: 'config-icon.svg',label:'Configurações', page:'config'},
  ];

}
