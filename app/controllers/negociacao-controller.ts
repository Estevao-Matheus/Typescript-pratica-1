import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociação.js";
import { Negociacoes } from "../models/negociações.js";
import { MensagemVIew } from "../views/mensagem.-view.js";
import { NegociacoesVIew } from "../views/necociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes(); 
    private negociacoesView = new NegociacoesVIew('#negociacoesView');
    private mensagemView = new MensagemVIew('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    public adiciona() : void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.diaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias uteis são aceitas');
            return;
        }   
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
        
    }

    private diaUtil (date: Date) {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO
    }

    private limparFormulario() : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus;

    }
    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
  
}