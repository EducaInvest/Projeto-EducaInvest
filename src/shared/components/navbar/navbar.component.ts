import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { url } from 'inspector';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})



export class NavbarComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

  nav_items = [
    {icon: 'home-icon.svg',label:'Página Inicial', page:'home'},
    {icon: 'perfil-icon.svg',label:'Perfil', page:'perfil'},
    {icon: 'projetos-icon.svg',label:'Projetos', page:'projetos'},
    {icon: 'negocios-icon.svg',label:'Meus Negócios', page:'negocios'},
    {icon: 'config-icon.svg',label:'Configurações', page:'config'},
  ];
}
