import { ETask } from "./Enums/ETask.enum";
import { ISchedule } from "./ISchedule.models";

export interface ITask{
    // id: number;
    descricaoAtividade: string;
    // statusAtividadeEnum: ETask[];
    dataInicioAtividade:Date;
    dataTerminoAtividade: Date;
    // percentual?: number;
    cronogramaId: number;
    // cronograma: ISchedule;
}