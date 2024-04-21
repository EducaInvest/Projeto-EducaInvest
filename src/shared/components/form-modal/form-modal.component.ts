import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../app/pages/api/api.service';
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

  formulario!: IProject[];
  postProjectForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private api: ApiService,
    private serviceForm: FormService,
  ) { }

  ngOnInit(): void {

    this.getForm();
    this.postProjectForm = this.formbuilder.group({
      title: ['', Validators.required],
      subtitle: [''],
      details: ['', Validators.required],
    })
  }


  getForm() {
    this.serviceForm.getForm().subscribe(
      data => {
        this.formulario = data,
        console.log(data)
      }
    )
  }

  addproject(data: IProject) {
    console.log(data)
    this.api.addproject(data).subscribe((res => {
      res.details = " "
      res.title = " "
      res.subtitle = " "
      this.postProjectForm.reset();
      alert('Projeto publicado com sucesso!');
    }))
  }
}
