import { Oportunidade } from './../oportunidade';
import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades: Oportunidade[] = [];

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService
    ) { }

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

  adicionar() {
    this.oportunidadeService.adicionar(this.oportunidade as Oportunidade).subscribe(() => {
      this.oportunidade = {};
      this.consultar();
      this.messageService.add({
        severity: 'success',
        summary: 'Oportunidade adicionada.'
      });
    });
  }

}
