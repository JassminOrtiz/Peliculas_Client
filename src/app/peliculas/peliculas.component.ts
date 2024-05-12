import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../shared/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: [
  ]
})
export class PeliculasComponent implements OnInit{

  constructor(public service : PeliculasService){}

  ngOnInit(): void {
    this.service.refreshList();
    this.service.getGeneros();
  }
}
