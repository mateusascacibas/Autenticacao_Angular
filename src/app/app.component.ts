import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './servicos/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private httpService: HttpService){}


  get autenticado(){
    return this.httpService.autenticado();
  }

  sair(){
    delete localStorage["token"];
    this.router.navigate(['/login']);
  }
}
