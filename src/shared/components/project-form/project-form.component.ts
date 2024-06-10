import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
//import { ApiService } from '../../../app/pages/api/api.service';
import { IProject } from '../../model/IProject.models';
import { FormService } from '../../services/form/form.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  providers: [],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {

  @ViewChild('ProjectFormModal') ProjectFormModal: any;

  form!: IProject;
  
  postProjectForm!: FormGroup;

  selectedFile: File | null = null;

  photoPreviewUrl: string = '../../assets/img/photo_default_form.svg'; // URL da foto padrão

  constructor(private formbuilder: FormBuilder,
    private serviceForm: FormService,
  ) { }

  ngOnInit(): void {
   this.initForm()
   this.setDataPublicacao();
  }

  postForm() {
    const formData: FormData = new FormData();
    this.serviceForm.postForm(this.postProjectForm.value).subscribe(res => { }),
      (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']);
      alert('Projeto publicado com sucesso!');
      // && location.reload();
    //console.log(this.form)

    if (this.selectedFile) {
      formData.append('fotoProjeto', this.selectedFile, this.selectedFile.name);
    }
  }

  public initForm(): void{
    this.postProjectForm = this.formbuilder.group({
      id:[null, [Validators.required]],
      nomeProjeto:[null, [Validators.required]],
      subtitulo:[null],
      descricaoProjeto:[null, [Validators.required]],
      //custoProjeto: [null],
      //investido: [null, [Validators.required]], 
      dataPublicacao:[null, [Validators.required]],
      fotoProjeto:[null],
      usuarioId:4,
      
    })
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
    {nome: 'Beatriz', titulo: 'Lider', funcao: 'Front-end'},
    {nome: 'Nathalli', titulo: 'Vice-Lider', funcao: 'Back-end'}
  ]

  // onFileSelected(event: any){
  //   if (event.target.files && event.target.files[0]){
  //     const fotoProjeto = event.target.files[0];
      
  //     //const formData = new FormData();
  //     //formData.append('fotoProjeto', fotoProjeto);

  //     this.serviceForm.postPhoto(this.postProjectForm.value).subscribe(res => console.log('Upload ok.'))
  //   }
  // }

  
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
