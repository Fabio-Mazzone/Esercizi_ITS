import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Animale } from '../../Models/animale';
import { AnimaleService } from '../../Services/animale-service';

@Component({
  selector: 'app-lista',
  imports: [CommonModule], 
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista implements OnInit {
  listaanimali: Animale[] = [];

  constructor(private service: AnimaleService){
  }

  ngOnInit(){
    this.listaanimali = this.service.readAll();
  }
  elimina(id?: number){
    if(id){
      if(this.service.Elimina(id))
        alert("Eliminazione Avvenuta")
      else
        alert("Errore nell'eliminazione")
    }
  }
}