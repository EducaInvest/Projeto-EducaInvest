import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { UserService } from '../../../shared/services/user/user.service';
import { ILoginUser } from '../../../shared/model/IUserLogin.models';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IUser } from '../../../shared/model/IUser.models';
import { HttpStatusCode } from '@angular/common/http';
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrl: './login.component.scss',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule, FooterComponent],
    standalone: true,

})

export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    model = {} as IUser;
    // model = {} as ILoginUser;

    constructor(
        private userService: UserService,
        private readonly fb: FormBuilder,
        private router: Router,
    ) { }

    ngOnInit() {
        this.initForm();
    }

    veriferUser() {
        this.userService.veriferUser(this.model).subscribe(
            res => {
                console.log(`usuario com email ${this.model.email} possui cadastro`)
                 this.router.navigateByUrl('/index');
            },
            error => {
                if (error.status == 401)
                    console.log('usuário ou senha inválido');
                else console.error(error);
            }
        )
    }

    initForm() {
        this.loginForm = this.fb.group({
            email: ['may@ra'],
            passwordString: ['123456'],
            nome: ['Mayara', Validators.required],
            sobrenome: ['Pilecarte', Validators.required],
            telefone: ['', Validators.required],
            perfil: [2],
            cpf: ['46958745215'],
            cidade: ['Sao Paulo'],
            uf: [8],
            linkSocial: ['a'],
        })
    }

    goRegister(){
        this.router.navigateByUrl('/signup');
    }
}