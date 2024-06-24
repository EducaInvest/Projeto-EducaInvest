import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../shared/services/user/user.service';
import { IUser } from '../../../shared/model/IUser.models';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'app-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrl: './sign-up.component.scss',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule, FooterComponent],
    standalone: true,
})

export class SignUpComponent implements OnInit {
    signUpForm!: FormGroup

    userData!: IUser

    constructor(
        private userService: UserService,
        private fb: FormBuilder,
        private route: Router,
    ) { }

    ngOnInit() {
        this.initForm();
    }

    postUser() {
        this.userService.postUser(this.signUpForm.value).subscribe(data => {
            console.log('dados', data);
        })
        // this.userService.acessHome();


    }

    initForm() {
        this.signUpForm = this.fb.group({
            email: ['', Validators.required],
            nome: ['', Validators.required],
            sobrenome: ['', Validators.required],
            telefone: ['', Validators.required],
            passwordString: ['', Validators.required],
            perfil: [2],
            cpf: ['46958745215'],
            cidade: ['Sao Paulo'],
            uf: ['SP'],
            linkSocial: ['a'],
        })
    }

    goLogin() {
        this.route.navigateByUrl('/login');
    }
}