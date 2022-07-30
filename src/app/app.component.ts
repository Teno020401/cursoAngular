import { Component, OnInit } from '@angular/core';
// import * as internal from 'stream';

interface Tarjeta {
  Titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mi primer app en Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {Titulo:'Video 1', subtitulo:'Subtitulo Video 1'},
      {Titulo:'Video 2', subtitulo:'Subtitulo Video 2'},
      {Titulo:'Video 3', subtitulo:'Subtitulo Video 3'}
    ]
  }
}
