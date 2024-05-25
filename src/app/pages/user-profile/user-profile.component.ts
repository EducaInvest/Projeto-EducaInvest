import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface SocialLink {
  platform: string;
  url: string;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  userType: 'Estudante' | 'Investidor';
  email: string;
  socialLinks: SocialLink[];
  phone: string;
  city: string;
  state: string;
  details: string;
  creationDate: Date;
  lastUpdateDate: Date;
  pPublicados: string;
  pInvestidos: string;
  pFinalizados: string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports:[
    CommonModule,
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile;
  isEditing: boolean = false;

  @Input() userData: any;

  constructor() {
    this.userProfile = {
      firstName: 'Nathalli',
      lastName: 'Ribeiro',
      userType: 'Estudante',
      email: 'nathalli.ribeiro@gmail.com',
      socialLinks: [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/nathalli99' },
        { platform: 'GitHub', url: 'https://github.com/nathalli99' }
      ],
      phone: '(11) 99999-9999',
      city: 'São Paulo',
      state: 'SP',
      details: 'breve texto',

      creationDate: new Date('2022-01-01'),
      lastUpdateDate: new Date(),
      pPublicados: '5',
      pInvestidos: '1',
      pFinalizados: '2'
    };
  }

  ngOnInit(): void {}

  editProfile(): void {
    this.isEditing = true;
  }

  // Método para salvar as alterações no perfil
  saveProfile(): void {
    // Adicione aqui a lógica para salvar as alterações
    this.isEditing = false;
  }
}
