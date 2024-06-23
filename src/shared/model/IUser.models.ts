import { EProfile } from "./Enums/EProfile.enum";
import { EState } from "./Enums/EState.enum";

export interface IUser{
    id:number;
    perfil?:EProfile;
    email:string;
    nome:string;
    sobrenome:string;
    cpf?:string;
    telefone?:string;
    // link:string;
    cidade?:string;
    uf?:EState;
    // dataAcesso:Date;
    passwordString?:string;
    linkSocial?: string;
    
    // details: string;
    // lastUpdateDate: Date;
    // pPublicados: string;
    // pInvestidos: string;
    // pFinalizados: string;
}