import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../services/projeto.service';
import { Router } from 'express';
import { IProject } from '../../model/IProject.models';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-form-test',
  standalone: true,
  imports: [],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.scss'
})
export class FormTestComponent implements OnInit {

  forms!: IProject[];
  
  project: IProject ={
    id : 1,
    title : "",
    subtitle : " ",
    details : " ",
    date :  new Date(),
  }

  constructor(private projectServices:ProjetoService, private router:Router,
    private serviceForm: FormService,
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getForm() {
    this.serviceForm.getForm().subscribe(
      data => {
        this.forms = data
      }
    )
  }

  addproject(): void {
    this.projectServices.addProject(this.project).subscribe(retorno => {
      this.project = retorno;
      /*this.projectServices.exibirMensagem(
        'Sistem',
        `${this.project.nomeProjeto} foi cadastrado com sucesso. ID: ${this.project.id}`, 'toast-success'
      );*/
    });
  }

}
