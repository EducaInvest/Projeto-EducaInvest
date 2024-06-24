import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IProject } from '../../model/IProject.models';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/form/form.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from '../../model/IUser.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    ReactiveFormsModule, 
    FormsModule, 
    CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent implements OnInit {
  
  @Input() userData: any;

  updateProjectForm!: FormGroup;

  project!: IProject[];

  projectEdit!: IProject;

  userId = 28;

  user!: IUser;

  @ViewChild('UploadProjectFormModal') uploadProjectFormModal: any;

  constructor(
    private formBuilder: FormBuilder,
    private serviceForm: FormService,
    private dialog: MatDialog
  ){ }

  ngOnInit(): void {
    this.getProjectByUser();
    this.initForm();
  }

  initForm(): void {
    this.updateProjectForm = this.formBuilder.group({
      id: ['', Validators.required],
      nomeProjeto: ['', Validators.required],
      subtitulo: [''],
      descricaoProjeto: ['', Validators.required],
      dataPublicacao: [''],
      fileBytes: [null]
    });

    if (this.project) {
      this.updateProjectForm.patchValue(this.project);
    }
  }

  // getProject(id: number): void {
  //   this.serviceForm.getProject(id).subscribe(
  //     (data: IProject) => {
  //       this.projectEdit = data;
  //       this.updateProjectForm.patchValue(this.project);
  //     },
  //     error => {
  //       console.error('Erro ao obter projeto:', error);
  //     }
  //   );
  // }

  updateProject(): void {
    try {
      const updatedProject = this.updateProjectForm.value as IProject;
      this.serviceForm.updateProject(updatedProject).subscribe(
        (data: IProject) => {
          console.log('Projeto atualizado com sucesso:', data);
        },
        error => {
          console.error('Erro ao atualizar projeto:', error);
        }
      );
    } catch {
      alert("Formulário inválido");
      console.log(JSON.stringify(this.updateProjectForm))
    }
    (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) &&
    location.reload();
  }
  
  getProjectByUser() {
    this.serviceForm.getProjectByUser(this.userId).subscribe(
      data => {
        this.project = data;
        // console.log(this.project);
      },
      error => {
        console.error('Erro ao obter projetos:', error);
      }
    );
  }

  openEditProjetoModal(project: IProject): void {
    this.updateProjectForm.patchValue(project);
    this.uploadProjectFormModal.nativeElement.open();
  }

  deleteProject(id: number): void {
        //abrir o modal
    //if(se o valor do modal for true){
    //  o método delete será acionado}
    this.serviceForm.deleteProject(id).subscribe(
      () => {
        console.log(`Projeto com ID=${id} foi deletado.`);
        location.reload();  
      },
      error => console.error('Erro ao deletar o projeto:', error)
    );
    (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) &&
    location.reload();
  }

  trackByFn(index: number, item: IProject): number {
    return item.id;
  }
}