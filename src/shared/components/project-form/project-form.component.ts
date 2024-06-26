import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { ApiService } from '../../../app/pages/api/api.service';
import { IProject } from '../../model/IProject.models';
import { FormService } from '../../services/form/form.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../model/IUser.models';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ScheduleService } from '../../services/schedule/schedule.service';



@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ScheduleComponent
  ],
  providers: [],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {

  @ViewChild('ProjectFormModal') ProjectFormModal: any;

  form!: IProject;

  user!: IUser;

  postProjectForm!: FormGroup;

  postScheduleForm!: FormGroup;

  selectedFile: File | null = null;

  photoPreviewUrl: string = '../../assets/img/photo_default_form.svg'; // URL da foto padrão

  constructor(
    private formbuilder: FormBuilder,
    private serviceForm: FormService,
    private serviceUser: UserService,
    private serviceSchedule: ScheduleService
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
      dataPublicacao: [null, [Validators.required]],
      fotoProjeto: [null],
      usuarioId: [usuarioId, [Validators.required]], // Inicializa o ID do usuário
    });
  }


  public scheduleForm(): void {
    this.postScheduleForm = this.formbuilder.group({})

  }

  postForm() {
    const formData: FormData = new FormData();
    this.serviceForm.postForm(this.postProjectForm.value).subscribe(res => { }),
      (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) &&
      location.reload();

  }

  getUser(): void {
    const id = 11;
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

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Atualizar a pré-visualização da foto
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photoPreviewUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      console.log("imagem selecionada!")
    }

  }

  equipeProjeto = [
    { nome: 'Beatriz', titulo: 'Lider', funcao: 'Front-end' },
    { nome: 'Nathalli', titulo: 'Vice-Lider', funcao: 'Back-end' }
  ]

  showAddTaskForm: boolean = false;

  toggleAddTaskForm(): void {
    this.showAddTaskForm = !this.showAddTaskForm;
  }

  addSchedule() {
    this.toggleAddTaskForm();

    // this.serviceSchedule.postSchedule(this.scheduleForm.value)
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

}
