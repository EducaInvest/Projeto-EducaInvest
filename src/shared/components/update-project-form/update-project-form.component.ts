// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { IProject } from '../../model/IProject.models';
// import { FormService } from '../../services/form/form.service';
// import { CommonModule } from '@angular/common';
// import { UserService } from '../../services/user/user.service';
// import { IUser } from '../../model/IUser.models';


// @Component({
//   selector: 'app-update-project-form',
//   standalone: true,
//   imports: [ReactiveFormsModule, FormsModule, CommonModule],
//   providers: [],
//   templateUrl: './update-project-form.component.html',
//   styleUrl: './update-project-form.component.scss'
// })

// export class UpdateProjectFormComponent implements OnInit {

//   @ViewChild('UpdateProjectFormModal') UpdateProjectFormModal: ElementRef | undefined;

//   project!: IProject;

//   user!: IUser;

//   updateProjectForm!: FormGroup;

//   selectedFile: File | null = null;

//   imageSrc: string | null = null;

//   photoPreviewUrl: string = '../../assets/img/photo_default_form.svg'; // URL da foto padrão

//   constructor(
//     private formbuilder: FormBuilder, 
//     private serviceForm: FormService, 
//     private serviceUser: UserService,
//   ) {}

//   ngOnInit(): void {
//     this.getUser();
//     this.setDataPublicacao();
//   }
  
//   public initForm(usuarioId: number = this.user.id!): void {
//     this.updateProjectForm = this.formbuilder.group({
//       id: [null, [Validators.required]],
//       nomeProjeto: [null, [Validators.required]],
//       subtitulo: [null],
//       descricaoProjeto: [null, [Validators.required]],
//       dataPublicacao: [null, [Validators.required]],
//       fileBytes: [null],
//       usuarioId: [usuarioId, [Validators.required]], // Inicializa o ID do usuário
//     });
//   }

//   postForm() {
//     const formData: FormData = new FormData();
//     this.serviceForm.postForm(this.updateProjectForm.value).subscribe(res => { }),
//       (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) &&
//       location.reload();      //console.log(this.form)

//     if (this.selectedFile) {
//       formData.append('fileBytes', this.selectedFile, this.selectedFile.name);
//     }
//   }

//   // getProjectDetails(): void {
//   //   const id = +this.route.snapshot.paramMap.get('id')!;
//   //   this.serviceForm.getProject(id)
//   //     .subscribe(project => this.project = project);
//   // }

//   getUser(): void {
//     const id = 2;
//     this.serviceUser.getUser(id).subscribe(
//       data => {
//         if (data.id !== undefined) {
//           this.user = data;
//           this.initForm(data.id); // Inicializa o formulário com o ID do usuário
//         } else {
//           console.error('ID do usuário é undefined');
//         }
//       },
//       error => {
//         console.error('Erro ao obter usuário:', error);
//       }
//     );
//   }

//   private setDataPublicacao(): void {
//     const dataAtual = new Date();
//     const dia = String(dataAtual.getDate()).padStart(2, '0');
//     const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
//     const ano = dataAtual.getFullYear();
//     const dataFormatada = `${dia}/${mes}/${ano}`;

//     this.updateProjectForm.patchValue({ dataPublicacao: dataFormatada });
//   }

//   onFileSelected(event: any): void {
//     const file: File = event.target.files[0];
//     if (file) {
//       this.selectedFile = file;

//       // Atualizar a pré-visualização da foto
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.photoPreviewUrl = e.target.result;
//         this.imageSrc = e.target.result as string;
//       };
//       reader.readAsDataURL(file);

//       console.log("imagem selecionada!");
//     }
//   }

//   async submitProject() {
//     const project: IProject = {
//       id: this.updateProjectForm.get('id')?.value || '',
//       nomeProjeto: this.updateProjectForm.get('nomeProjeto')?.value || '',
//       subtitulo: this.updateProjectForm.get('subtitulo')?.value || '',
//       descricaoProjeto: this.updateProjectForm.get('descricaoProjeto')?.value || '',
//       dataPublicacao: this.updateProjectForm.get('dataPublicacao')?.value || '',
//       custoProjeto: this.updateProjectForm.get('custoProjeto')?.value || '',
//       usuarioId: this.user.id!,
//       investido: this.updateProjectForm.get('investido')?.value || 0,
//       fileBytes: this.updateProjectForm.get('fileBytes')?.value || '',
//     };

//     if (this.selectedFile) {
//       try {
//         const fileBytes = await this.serviceForm.convertFileToBytes(this.selectedFile);
//         project.fileBytes = fileBytes;
//       } catch (error) {
//         console.error('Error converting file to bytes', error);
//         return; // Exit if there's an error
//       }
//     }

//     this.serviceForm.postPhoto(project).subscribe(response => {
//       console.log('Project submitted successfully', response);
//       this.resetFileSelection();
//     });
//   }

//   resetFileSelection() {
//     this.selectedFile = null;
//     this.imageSrc = null;
//   }

//   loadProject(id: number): void {
//     this.serviceForm.getProject(id).subscribe(
//       data => {
//         this.project = data;
//         this.initForm(this.project.usuarioId); // Inicializa o formulário com os dados do projeto
//       },
//       error => {
//         console.error('Erro ao obter projeto:', error);
//       }
//     );
//   }

//   updateProject(): void {
//     const project: IProject = {
//       id: this.project.id,
//       nomeProjeto: this.updateProjectForm.get('nomeProjeto')?.value || '',
//       subtitulo: this.updateProjectForm.get('subtitulo')?.value || '',
//       descricaoProjeto: this.updateProjectForm.get('descricaoProjeto')?.value || '',
//       dataPublicacao: this.updateProjectForm.get('dataPublicacao')?.value || '',
//       custoProjeto: this.updateProjectForm.get('custoProjeto')?.value || '',
//       usuarioId: this.project.usuarioId,
//       investido: this.updateProjectForm.get('investido')?.value || 0,
//       fileBytes: this.project.fileBytes,
//     };
  
//     this.serviceForm.updateProject(project).subscribe(
//       () => {
//         console.log('Projeto atualizado com sucesso!');
//         location.reload();
//       },
//       error => console.error('Erro ao atualizar projeto:', error)
//     );
//   }
  

//   equipeProjeto = [
//     { nome: 'Beatriz', titulo: 'Lider', funcao: 'Front-end' },
//     { nome: 'Nathalli', titulo: 'Vice-Lider', funcao: 'Back-end' }
//   ]

//   // onFileSelected(event: any){
//   //   if (event.target.files && event.target.files[0]){
//   //     const fileBytes = event.target.files[0];

//   //     //const formData = new FormData();
//   //     //formData.append('fileBytes', fileBytes);

//   //     this.serviceForm.postPhoto(this.updateProjectForm.value).subscribe(res => console.log('Upload ok.'))
//   //   }
//   // }


//   //evento para criar uma nova linha da tabela ao clicar na tecla ENTER

//   // $scope.addline = function ($event) {
//   //   debugger

//   //   if (event.keyCode == 13) {
//   //       var algo = {};
//   //       for (i = 0; i < $scope.etc.Fields.length; i++) {

//   //           algo["seu array"] = ""

//   //       }

//   //       $scope.myArrayData.push(algo);

//   //     }

// }
