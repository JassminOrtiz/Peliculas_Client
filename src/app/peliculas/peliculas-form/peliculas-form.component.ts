import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Generos } from 'src/app/shared/generos.model';
import { PeliculasService } from 'src/app/shared/peliculas.service';

@Component({
  selector: 'app-peliculas-form',
  templateUrl: './peliculas-form.component.html',
  styles: [
  ]
})
export class PeliculasFormComponent {
  constructor(public service : PeliculasService){}


  onSubmit(form:NgForm){
    console.log(this.service.formData)
    this.service.postMovie()
    .subscribe({
      next: res => {
        console.log(res)
      },
      error:err => {console.log(err)}
    })
  }
}
