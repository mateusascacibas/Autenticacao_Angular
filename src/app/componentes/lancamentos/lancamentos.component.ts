import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataHoraService } from 'src/app/servicos/data-hora.service';
import { LancamentoService } from 'src/app/servicos/lancamento.service';
import { Lancamentos } from '../models/lancamentos';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit, OnDestroy {
  lancamentos: Lancamentos[] = [];
  dataHoraAtual = '';
  dataHoraAtualSub: Subscription | undefined;
  dataTempoReal = "";
  dataTempoRealSub: Subscription | undefined;

  constructor(private router: Router, private lancamentoService: LancamentoService, private dataHoraService: DataHoraService) { }
  
  ngOnDestroy(): void {
    this.dataHoraAtualSub?.unsubscribe();
    this.dataTempoRealSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.lancamentoService.listarTodos().subscribe(
      dados => this.lancamentos = dados.data.content,
      () => alert("Erro obtendo lançamentos")
    );
    this.dataHoraAtualSub = this.dataHoraService.dataHora.subscribe(
      dataHora => this.dataHoraAtual = dataHora
    );
    this.dataTempoRealSub = this.dataHoraService.dataHoraTempoReal.subscribe(
      dataHora => this.dataTempoReal = dataHora
    )
  }

  urlLocalizacao(localizacao: String){
      return "https://google.com/maps/search/?api=1&query=" + localizacao;
  }
  atualizarDataHora(){
    this.dataHoraService.atualizarDataHora();
  }
  /* tipoPonto(tipo: String){
    return tipo = tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase().replace("_", " ");
  }/**/ 
 
}
