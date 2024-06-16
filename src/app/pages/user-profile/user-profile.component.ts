import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../shared/model/IUser.models';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../../shared/services/user/user.service';
import { IProject } from '../../../shared/model/IProject.models';

// interface SocialLink {
//   platform: string;
//   url: string;
// }

// interface UserProfile {
//   firstName: string;
//   lastName: string;
//   email: string;
//   cpf: string
//   socialLinks: SocialLink[];
//   phone: string;
//   city: string;
//   state: string;
//   details: string;
//   creationDate: Date;
//   lastUpdateDate: Date;
//   pPublicados: string;
//   pInvestidos: string;
//   pFinalizados: string;
// }

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  // userProfile: IUser;
  // isEditing: boolean = false;

  @Input() userData: any;

  user!: IUser;




  constructor(private formbuilder: FormBuilder, private serviceUser: UserService) {


  //   this.userProfile = {
  //     // firstName: 'Nathalli',
  //     // lastName: 'Ribeiro',
  //     // // userType: 'Estudante',
  //     // email: 'nathalli.ribeiro@gmail.com',
  //     // cpf: '123456789101',
  //     // socialLinks: [
  //     //   { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/nathalli99' },
  //     //   { platform: 'GitHub', url: 'https://github.com/nathalli99' }
  //     // ],
  //     // phone: '(11) 99999-9999',
  //     // city: 'São Paulo',
  //     // state: '',
  //     // details: 'breve texto',

  //     // creationDate: new Date('2022-01-01'),
  //     // lastUpdateDate: new Date(),
  //     // pPublicados: '5',
  //     // pInvestidos: '1',
  //     // pFinalizados: '2'
  //   };
}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.serviceUser.getUser().subscribe(
      data => {
        this.user = data, 
        console.log(this.user)
      }
    )
  }

  // editProfile(): void {
  //   this.isEditing = true;
  // }

  // // Método para salvar as alterações no perfil
  // saveProfile(): void {
  //   // Adicione aqui a lógica para salvar as alterações
  //   this.isEditing = false;
  // }
}
