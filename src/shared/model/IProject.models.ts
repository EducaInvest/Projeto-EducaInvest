export interface IProject{
    id:number;
    // statusProjeto: EProject[];
    nomeProjeto:string;
    subtitulo:string;
    descricaoProjeto:string;
    // custoProjeto: number;
    investido: boolean; 
    dataPublicacao:Date;
    usuarioId:number;
    formattedDataPublicacao?: string;

}