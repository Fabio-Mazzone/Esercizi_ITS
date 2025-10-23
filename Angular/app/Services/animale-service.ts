import { Injectable } from '@angular/core';
import { Animale } from '../Models/animale';

@Injectable({
  providedIn: 'root'
})
export class AnimaleService {
  private lista: Animale[] = [
    {
  id: 1,
  specie: "Leone",
  nome: "Simba",
  peso: 190,
  peli: true,
  provenienza: "Africa"
},

{
  id: 2,
  specie: "Elefante",
  nome: "Dumbo",
  peso: 5000,
  peli: false,
  provenienza: "Africa"
},

{
  id: 3,
  specie: "Cane",
  nome: "Rex",
  peso: 25,
  peli: true,
  provenienza: "Europa"
}

  ];
  readAll(): Animale[]{
    return this.lista
  }
  insert(anim: Animale): boolean{
    this.lista.push(anim)
    return true;
  }
  CercaPerId(varId: number): Animale | null{
    for(let [index, item] of this.lista.entries()){
      if (item.id=== varId)
        return item;
    }
    return null;
  }
  Elimina(varId: number): boolean{
    for(let [index, item] of this.lista.entries()){
      if(item.id===varId){
        this.lista.splice(index,1);
        return true;
      }
    }
    return false;
  }
}
