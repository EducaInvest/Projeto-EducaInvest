import { Component, OnInit } from '@angular/core';
import { ISchedule } from '../../model/ISchedule.models';
import { ScheduleService } from '../../services/schedule/schedule.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {

  schedule: ISchedule[] = [];

  // schedulep: ISchedule = { id: 0, projetoId: 0 };

  scheduleForm!: FormGroup;

  constructor(
        private serviceSchedule: ScheduleService, 
    private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    this.serviceSchedule.getAllSchedule().subscribe(data => {
      this.schedule = data;
    });

    this.initForm();
  }

  // scheduleForm

  initForm(): void {
    this.scheduleForm = this.formBuilder.group({
      id: [],
      projetoId: [0, Validators.required] ,
      atividades: []
    });
  }
  
  postSchedule(): void {
    if (this.scheduleForm.valid) {
      const newSchedule: ISchedule = {
        id: 0,
        ...this.scheduleForm.value
      };

      this.serviceSchedule.postSchedule(newSchedule).subscribe(data => {
        console.log('Cronograma adicionado com sucesso', data);
        this.schedule.push(data);
      });
    }
  }

  // deleteSchedule(): void {
  //   this.serviceSchedule.deleteSchedule(this.id).subscribe(data => {
  //     console.log('Cronograma deletado com sucesso', data);
  //   });
  // }

}
