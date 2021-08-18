import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.prod';
import { HttpService } from './http.service';
import { saveAs } from 'file-saver';
import { Lancamentos } from '../componentes/models/lancamentos';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  listarTodos(): Observable<any> {
    const id = this.httpService.obterIdUsuario(); 
    return this.http.get(env.apiBaseUrl + "api/lancamentos/funcionario/" + id +"?sort=id&dir=DESC", this.httpService.headers());
  }

 
  downloadCSV(lancamentos: Lancamentos[]){
    const colunas='ID,Data,Hora,Tipo,Localizacao\n';
    const linhas: string[] = [];
    lancamentos.forEach(lanc =>{
      const dataHora = lanc.data.split(" ");
      const linha = `${lanc.id},${dataHora[0]},${dataHora[1]},${lanc.tipo},"${lanc.localizacao}"`; 
      linhas.push(linha);
    });

    console.log(colunas + linhas.join('\n'));
    const dados = colunas + linhas.join('\n');
    const blob = new Blob([dados], { type: 'text/csv' });
    saveAs(blob, 'lancamentos.csv');
  }
}
