import { Component, OnInit } from '@angular/core';
import { Formateur } from './formateur';
import { FormateursService } from './formateurs.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {

  formateursList: any;
  aModifier: number = -1;
  newFormateur: Boolean = false;
  constructor(private formateurService: FormateursService) {  
  }

  ngOnInit(): void {
    this.formateursList = this.formateurService.get();
    console.log(this.formateursList);
  }

  ajouter(): void {
    this.newFormateur = true;
  }

  modifier(index: number): void {
    this.aModifier = index;
    console.log(this.formateursList);
  }

  supprimer(id: number): void {
    this.formateurService.delete(id);
    console.log(this.formateursList);
  }

  submit(item: Formateur): void {
    this.newFormateur = false;
    console.log(item);
    this.formateurService.add(item);
  }

}
