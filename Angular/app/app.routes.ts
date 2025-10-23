import { Routes } from '@angular/router';
import { Lista } from './components/lista/lista';
import { Inserisci } from './components/inserisci/inserisci';

export const routes: Routes = [
    {path: "", redirectTo: "Lista", pathMatch: "full"},
    {path: "Lista", component: Lista},
    {path: "Inserisci", component: Inserisci},


];
