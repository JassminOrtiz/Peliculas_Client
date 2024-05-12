import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Peliculas } from './peliculas.model';
import { Generos } from './generos.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  url:string = environment.apiBase
  listP:Peliculas[] =[];
  listG:Generos[] = [];
  formData:Peliculas = new Peliculas();
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url + '/Peliculas/Save_all')
    .subscribe({
      next: res => {
        this.listP = res as Peliculas[]
      },
      error: err => { console.log(err) }
    })
  }

  getGeneros(){
    this.http.get(this.url + '/Peliculas/Save_genero')
    .subscribe({
      next: res => {
        this.listG = res as Generos[]
      },
      error: err => { console.log(err) }
    })
  }

  postMovie(){
    console.log("Esto es el resultado final de mi form: ", this.formData)
    return this.http.post(this.url + '/Peliculas/UpdateMovie', this.formData)
  }
}
