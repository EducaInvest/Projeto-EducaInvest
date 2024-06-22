export interface IProject{
    id:number;
    // statusProjeto: EProject[];
    nomeProjeto:string;
    subtitulo:string;
    descricaoProjeto:string;
    custoProjeto: number;
    investido: boolean; 
    dataPublicacao:Date;
    fileBytes:number[][];
    usuarioId:number;
    formattedDataPublicacao?: string;

}