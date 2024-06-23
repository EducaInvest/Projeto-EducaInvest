import { Component, OnInit } from '@angular/core';
import { IProject } from '../../model/IProject.models';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../../services/form/form.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent implements OnInit {

  card!: IProject[];

  userId = 28

  constructor(
    private formbuilder: FormBuilder,
    private serviceForm: FormService
  ){ }

  ngOnInit(): void {
    this.getProjectByUser();

  }

  getProjectByUser() {
    this.serviceForm.getProjectByUser(this.userId).subscribe(
      data => {
        this.card = data,
          console.log(this.card);
          
      }
    )
  }

  deleteProject(id: number): void {
    this.serviceForm.deleteProject(id).subscribe(
      () => {
        console.log(`Projeto com ID=${id} foi deletado.`);
        location.reload();  
      },
      error => console.error('Erro ao deletar o projeto:', error)
    );
  }

}