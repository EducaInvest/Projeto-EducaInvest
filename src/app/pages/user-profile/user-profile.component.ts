import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';

import { IUser } from '../../../shared/model/IUser.models';

import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

import { UserService } from '../../../shared/services/user/user.service';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { EstadoEnum, EstadoEnumLabelMapping } from '../../../shared/model/Enums/EState.enum';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  // userProfile: IUser;
  // isEditing: boolean = false;

  @Input() userData: any;

  user!: IUser;

  updateUserForm!: FormGroup;

  changePasswordForm!: FormGroup;

  isPasswordVisible: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private serviceUser: UserService) {
  }

  ngOnInit(): void {
    this.getUser(11);
    this.initForm();
    this.updateUser();
  }



  initForm(): void {
    this.updateUserForm = this.formbuilder.group({
      id: [],
      nome: [],
      sobrenome: [],
      email: [],
      cpf: [],
      telefone: [],
      cidade: [],
      uf: [null, Validators.required],
      passwordString: [],
    });

    this.changePasswordForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passwordString: ['', [Validators.required, Validators.minLength(6)]]
    });

    if (this.user) {
      this.updateUserForm.patchValue(this.user);
    }
  }

  EstadoEnum = EstadoEnum;
  EstadoEnumLabelMapping = EstadoEnumLabelMapping;
  estadoEnum = Object.values(EstadoEnum).filter(value => typeof value === 'number') as EstadoEnum[];

  getEStates(): EstadoEnum[] {
    return Object.values(EstadoEnum).filter(value => typeof value === 'string') as EstadoEnum[];
  }
  
  

  getUser(userId: number): void {
    this.serviceUser.getUser(userId).subscribe(
      data => {
        this.user = data;
        this.updateUserForm.patchValue(this.user); // Preecher o formulário com os dados do usuário
      },
      error => {
        console.error('Erro ao obter usuário:', error);
      }
    );
  }

  updateUser(): void {
    try {
      const updatedUser = this.updateUserForm.value as IUser;
      this.serviceUser.updateUser(updatedUser).subscribe(
        (data: IUser) => {
          updatedUser.uf = data.uf
          
          console.log('Usuário atualizado com sucesso:', data);
          (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) &&
            location.reload();
        },
        error => {
          console.error('Erro ao atualizar usuário:', error);
        }
      );
    }
    catch {
      alert("Formulario Invalido");
      console.log(JSON.stringify(this.updateUserForm))
    }
  }

  changePassword(): void {
    const { email, passwordString } = this.changePasswordForm.value;
    this.serviceUser.changePassWord(email, passwordString).subscribe(
      data => {
        console.log('Senha alterada com sucesso:', data);
      },
      error => {
        console.error('Erro ao alterar a senha:', error);
      }
    );
  }

  showChangePasswordForm: boolean = false;

  toggleChangePasswordForm(): void {
    this.showChangePasswordForm = !this.showChangePasswordForm;
  }
  // togglePasswordVisibility(): void {
  //   const passwordInput = document.getElementById('inputPassword4') as HTMLInputElement; //verificar este campo
  //   const toggleIcon = document.getElementById('togglePassword') as HTMLElement;

  //   if (passwordInput.type === 'password') {
  //     passwordInput.type = 'text';
  //     toggleIcon.classList.remove('bi-eye-slash');
  //     toggleIcon.classList.add('bi-eye');
  //   } else {
  //     passwordInput.type = 'password';
  //     toggleIcon.classList.remove('bi-eye');
  //     toggleIcon.classList.add('bi-eye-slash');
  //   }
  // }

}
