import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IProject } from '../../model/IProject.models';
import { FormService } from '../../services/form/form.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../model/IUser.models';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { scheduled } from 'rxjs';
import { ScheduleComponent } from '../schedule/schedule.component';

export interface Element {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    ScheduleComponent
  ],
  providers: [],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})

export class ProjectFormComponent implements OnInit {

  @ViewChild('ProjectFormModal') ProjectFormModal: ElementRef | undefined;

  project!: IProject;

  user!: IUser;

  postProjectForm!: FormGroup;

  photoPreviewUrl: string = '../../assets/img/photo_default_form.svg'; // URL da foto padrão

  constructor(
    private formbuilder: FormBuilder,
    private serviceForm: FormService,
    private serviceUser: UserService,
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.setDataPublicacao();
  }

  public initForm(usuarioId: number = this.user.id!): void {
    this.postProjectForm = this.formbuilder.group({
      id: [null, [Validators.required]],
      nomeProjeto: [null, [Validators.required]],
      subtitulo: [null],
      descricaoProjeto: [null, [Validators.required]],
      custoProjeto: [ Validators.required],
      dataPublicacao: [null, [Validators.required]],
      fileBytes: [null],
      usuarioId: [usuarioId, [Validators.required]], // Inicializa o ID do usuário
    });
  }

  postForm() {
    const project = this.postProjectForm.value;
    console.log("CustoProjeto antes da conversão:", project.custoProjeto);

    // Verifica se custoProjeto é um número válido antes de converter
    if (typeof project.custoProjeto === 'number' && !isNaN(project.custoProjeto)) {
        project.custoProjeto = parseFloat(project.custoProjeto.toFixed(2));
    } else {
        console.error("CustoProjeto não é um número válido:", project.custoProjeto);
        project.custoProjeto = 0.00; // Valor padrão caso inválido
    }

    console.log("CustoProjeto após a conversão:", project.custoProjeto);

    this.serviceForm.postForm(project).subscribe(res => {
        console.log(JSON.stringify(res));
    });
}


  // (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) &&
  // location.reload();      //console.log(this.form)

  getUser(): void {
    const id = 4;
    this.serviceUser.getUser(id).subscribe(
      data => {
        if (data.id !== undefined) {
          this.user = data;
          this.initForm(data.id); // Inicializa o formulário com o ID do usuário
        } else {
          console.error('ID do usuário é undefined');
        }
      },
      error => {
        console.error('Erro ao obter usuário:', error);
      }
    );
  }

  private setDataPublicacao(): void {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    this.postProjectForm.patchValue({ dataPublicacao: dataFormatada });
  }

  async submitProject() {
    const project: IProject = {
      id: this.postProjectForm.get('')?.value || '',
      nomeProjeto: this.postProjectForm.get('nomeProjeto')?.value || '',
      subtitulo: this.postProjectForm.get('subtitulo')?.value || '',
      descricaoProjeto: this.postProjectForm.get('descricaoProjeto')?.value || '',
      dataPublicacao: this.postProjectForm.get('dataPublicacao')?.value || '',
      custoProjeto: this.postProjectForm.get('custoProjeto')?.value || '',
      usuarioId: this.user.id!,
      investido: this.postProjectForm.get('investido')?.value || 0,
      fileBytes: this.postProjectForm.get('fileBytes')?.value || '',
    };
  }

  loadProject(id: number): void {
    this.serviceForm.getProject(id).subscribe(
      data => {
        this.project = data;
        this.initForm(this.project.usuarioId);
      },
      error => {
        console.error('Erro ao obter projeto:', error);
      }
    );
  }

  updateProject(): void {
    const project: IProject = {
      id: this.project.id,
      nomeProjeto: this.postProjectForm.get('nomeProjeto')?.value || '',
      subtitulo: this.postProjectForm.get('subtitulo')?.value || '',
      descricaoProjeto: this.postProjectForm.get('descricaoProjeto')?.value || '',
      dataPublicacao: this.postProjectForm.get('dataPublicacao')?.value || '',
      custoProjeto: this.postProjectForm.get('custoProjeto')?.value || '',
      usuarioId: this.project.usuarioId,
      investido: this.postProjectForm.get('investido')?.value || 0,
      fileBytes: this.postProjectForm.get('fileBytes')?.value || ''
    };

    this.serviceForm.updateProject(project).subscribe(
      () => {
        console.log('Projeto atualizado com sucesso!');
        location.reload();
      },
      error => console.error('Erro ao atualizar projeto:', error)
    );
  }

}

  //evento para criar uma nova linha da tabela ao clicar na tecla ENTER

  // $scope.addline = function ($event) {
  //   debugger

  //   if (event.keyCode == 13) {
  //       var algo = {};
  //       for (i = 0; i < $scope.etc.Fields.length; i++) {

  //           algo["seu array"] = ""

  //       }

  //       $scope.myArrayData.push(algo);

  //     }


