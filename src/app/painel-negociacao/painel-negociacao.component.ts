import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidades = [
    { descricao: 'Projeto de dev', nomeProspecto: 'Ali Baba', valor: 50000 },
    { descricao: 'Projeto de dev1', nomeProspecto: 'Ali Baba1', valor: 60000 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
