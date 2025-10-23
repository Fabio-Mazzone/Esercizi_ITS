import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimaleService } from '../../Services/animale-service';
import { Animale } from '../../Models/animale';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserisci',
  imports: [FormsModule, CommonModule],
  templateUrl: './inserisci.html',
  styleUrl: './inserisci.css'
})
export class Inserisci {
  nom: string = '';
  spec: string = '';
  pes: number = 0;
  pel: boolean = false;
  prov: string = '';

  constructor(private service: AnimaleService, private router: Router) { }

  salva(): void {
    const anim: Animale = {
      id: this.service.readAll().length + 1,
      nome: this.nom,
      specie: this.spec,
      peso: this.pes,
      peli: this.pel,
      provenienza: this.prov
    };

    if (this.service.insert(anim)) {
      alert("Animale inserito!");
      this.router.navigateByUrl("elenco");
    } else {
      alert("Errore!");
    }
  }
}