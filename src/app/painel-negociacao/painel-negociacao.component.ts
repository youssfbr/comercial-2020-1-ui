import { Oportunidade } from './../oportunidade';
import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades: Oportunidade[] = [];

  constructor(private oportunidadeService: OportunidadeService ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.oportunidadeService.listar()
      .subscribe(resposta => {
        this.oportunidades = resposta as any;
        console.log(resposta);
    });
  }

}
