import { Negociacoes } from "../models/negociações.js";
import { View } from "./view.js";

export class NegociacoesVIew extends View<Negociacoes> {
    
     protected template (model: Negociacoes) : string {
        return  `
           <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th> DATA </th>
                        <th> QUANTIDADE </th>
                        <th> VALOR </th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                          <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                          </tr>
                        `;
                    }).join('')}
               </tbody>        
           </table> 
        `;
    }

   private formatar(data: Date): String {
       return new Intl.DateTimeFormat().format(data);
    }
}

