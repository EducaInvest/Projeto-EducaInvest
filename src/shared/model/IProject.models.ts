export interface IProject{
    id:number;
    nomeProjeto:string;
    subtitulo:string;
    descricaoProjeto:string;
//     CustoProjeto: number;
    investido: boolean; 
    dataPublicacao:Date;
    fotoProjeto:string;
    usuarioId:number;
}