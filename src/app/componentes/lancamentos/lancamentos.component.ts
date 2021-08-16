import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LancamentoService } from 'src/app/servicos/lancamento.service';
import { Lancamentos } from '../models/lancamentos';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {
  lancamentos: Lancamentos[] = [];
 
  constructor(private router: Router, private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.lancamentoService.listarTodos().subscribe(
      dados => this.lancamentos = dados.data.content,
      () => alert("Erro obtendo lançamentos")
    );
    
  }

  urlLocalizacao(localizacao: String){
      return "https://google.com/maps/search/?api=1&query=" + localizacao;
  }

  /* tipoPonto(tipo: String){
    return tipo = tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase().replace("_", " ");
  }/**/ 
 
}
