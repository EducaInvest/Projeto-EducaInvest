import { ITask } from "./ITask.models";

export interface ISchedule {
    id: number;
    projetoId: number;
    atividades?: ITask[]
}