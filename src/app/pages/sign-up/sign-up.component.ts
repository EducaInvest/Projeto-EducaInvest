import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
    selector: 'app-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrl: './sign-up.component.scss',
    imports:[FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    standalone: true,
})

export class SignUpComponent implements OnInit {
    signUpForm!: FormControl
    constructor() { }

    ngOnInit() { }
}