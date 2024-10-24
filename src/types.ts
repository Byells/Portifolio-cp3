export interface Avaliacao {
    id: number;
    categoria: string; // CheckPoints, GlobalSolution, Challenger Sprints
    nota: number;
    data: string;
    feedback: string;
  }
  

  export type TipoAluno = {
    id: number;
    nome: string;
    nota: number;


  }