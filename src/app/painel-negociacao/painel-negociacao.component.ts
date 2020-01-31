import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidades = []; // this.service.listar();
  // [
  //   { descricao: 'Projeto de dev', nomeProspecto: 'Ali Baba', valor: 50000 },
  //   { descricao: 'Projeto de dev1', nomeProspecto: 'Ali Baba1', valor: 60000 }
  // ];

  constructor(private oportunidadeService: OportunidadeService ) { }

  ngOnInit() {
    this.oportunidadeService.listar()
      .subscribe(resposta => this.oportunidades = <any> resposta);
  }

}
