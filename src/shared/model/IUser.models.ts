import { EProfile } from "./Enums/EProfile.enum";
import { EstadoEnum } from "./Enums/EState.enum";



export interface IUser{
    id:number;
    perfil?:EProfile;
    email:string;
    nome:string;
    sobrenome:string;
    cpf?:string;
    telefone?:string;
    // link:string;
    cidade:string;
    uf:EstadoEnum;
    dataAcesso:Date;
    passwordString:string;
    linkSocial: string;
}