import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { ApiService } from '../../../app/pages/api/api.service';
import { IProject } from '../../model/IProject.models';
import { FormService } from '../../services/form/form.service';



@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  providers: [],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss'
})
export class FormModalComponent implements OnInit {
  [x: string]: any;

  form!: IProject;
  postProjectForm!: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private serviceForm: FormService,
  ) { }

  ngOnInit(): void {
    this.postProjectForm = this.formbuilder.group({
      nomeProjeto: ['', Validators.required],
      subtitulo: [''],
      descricaoProjeto: ['', Validators.required],
      fotoProjeto: ['']
    })
  } 

  postForm() {
    this.serviceForm.postForm(this.postProjectForm.value).subscribe(res => {})
    // console.log(data)
  }
}

 // res.nomeProjeto = " "
      // res.subtitulo = " "
      // res.descricaoProjeto = " "
      // this.postProjectForm.reset();
      // alert('Projeto publicado com sucesso!');