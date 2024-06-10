import { Component, OnInit } from '@angular/core';
import { IProject } from '../../model/IProject.models';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../../services/form/form.service';


@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  card!: IProject[];

  userId = 4
  constructor(private formbuilder: FormBuilder,
    private serviceForm: FormService,
  ) { }

  ngOnInit(): void {

    this.getProjectByUser();
    
  }

  getProjectByUser() {
    this.serviceForm.getProjectByUser(this.userId).subscribe(
      data => {
        this.card = data,
        console.log(this.card)
      }
    )
  }
}