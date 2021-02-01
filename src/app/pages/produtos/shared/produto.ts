import { Padaria } from "../../padarias/shared/padaria";

export class Produto {
    codBarra?: number;
    validade?: string;
    descricao?: string;
    titulo?: string;
    padaria?: Padaria;
    quantidade?: number;
}
