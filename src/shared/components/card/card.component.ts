import { Component } from '@angular/core';
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
export class CardComponent {

  card!: IProject[];
 

  constructor(private formbuilder: FormBuilder,
    private serviceForm: FormService,
  ) { }

  ngOnInit(): void {

    this.getForm();
    
  }

  
  getForm() {
    this.serviceForm.getForm().subscribe(
      data => {
        this.card = data,
        console.log(data)
      }
    )
  }
}
