import {Negociacao} from './Negociacao'
export class Negociacoes {
    
    //private _negociacoes: Array<Negociacao> = []; 
    //Atalho
    private _negociacoes: Negociacao[] = [];
    
    //Devolve vazio
    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    //Devolve um tipo, devolve Negociacao
    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}