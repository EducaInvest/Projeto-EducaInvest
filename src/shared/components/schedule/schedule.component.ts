import { Component, OnInit } from '@angular/core';
import { ISchedule } from '../../model/ISchedule.models';
import { ScheduleService } from '../../services/schedule/schedule.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ITask } from '../../model/ITask.models';

@Component({
    selector: 'app-schedule',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        MatPaginatorModule,],
    templateUrl: './schedule.component.html',
    styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {

    schedule: ISchedule[] = [];

    tasks: ITask[] = [];

    // schedulep: ISchedule = { id: 0, projetoId: 0 };

    postScheduleForm: FormGroup | any;

    constructor(
        private formBuilder: FormBuilder,
        private scheduleService: ScheduleService,
        // private taskService: TaskService,
    ) { }

    ngOnInit(): void {
        // this.scheduleService.getAllSchedule().subscribe(data => {
        // this.schedule = data;


        // });
        this.postScheduleForm = this.formBuilder.group({
            descricaoAtividade: ['', Validators.required],
            dataInicioAtividade: ['', Validators.required],
            dataTerminoAtividade: ['', Validators.required],
        })

        // this.initForm();
    }

    addTask() {
        if(!this.postScheduleForm.valid){
            alert("Preencha os campos antes de adicionar uma nova task!");
        }else{
            this.tasks.push(this.postScheduleForm.value);
            console.log(this.postScheduleForm.value)
            this.postScheduleForm.reset();
        }
    }

    // scheduleForm

    //   initForm(): void {
    //     this.postScheduleForm = this.formBuilder.group({
    //       id: [],
    //       projetoId: [0, Validators.required],
    //       atividades: []
    //     });
    //   }

    //   postSchedule(): void {
    //     if (this.postScheduleForm.valid) {
    //       const newSchedule: ISchedule = {
    //         id: 0,
    //         ...this.postScheduleForm.value
    //       };

    //       this.scheduleService.postSchedule(newSchedule).subscribe(data => {
    //         console.log('Cronograma adicionado com sucesso', data);
    //         this.schedule.push(data);
    //       });
    //     }
    //   }


    // deleteSchedule(): void {
    //   this.serviceSchedule.deleteSchedule(this.id).subscribe(data => {
    //     console.log('Cronograma deletado com sucesso', data);
    //   });
    // }

}
