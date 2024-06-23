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
import { error } from 'console';
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrl: './login.component.scss',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule, FooterComponent],
    standalone: true,
})

export class LoginComponent implements OnInit {
    model = {} as ILoginUser;

    loginForm!: FormGroup;



    constructor(
        private userService: UserService,
        private readonly fb: FormBuilder,
        private router: Router,
    ) { }

    get email() {
        return this.loginForm.controls['email'];
    }
    get password() { return this.loginForm.controls['passwordString']; }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            passwordString: ['', Validators.required],
        })
    }

    veriferUser() {
        const { email, passwordString } = this.loginForm.value;
        this.userService.verificarUsuario(this.loginForm.value).subscribe(
            res => {
                // if (res) {
                //     console.log('Login bem-sucedido');
                //     this.router.navigateByUrl('/index');
                //   } else {
                //      console.log('Usuário ou senha incorretos');
                //      console.log(JSON.stringify(this.model))
                //   }

                // sessionStorage.setItem('email', email as string);

            },
            error => {
                if (error.status !== 200) {
                    console.log('usuário ou senha inválido');
                    console.error(error);
                }
                else console.error(error);
            }

        )
        this.userService.acessHome()
    }

    goRegister() {
        this.router.navigateByUrl('/signup');
    }
}