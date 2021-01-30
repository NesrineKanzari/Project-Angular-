import { Injectable } from '@angular/core';
import { Formateur } from './formateur';
import { FORMATEURSLIST } from './formateurs'
@Injectable({
  providedIn: 'root'
})
export class FormateursService {
  constructor() {
  }
  get() {
    return FORMATEURSLIST;
  }
  add(item: Formateur) {
    item.id = FORMATEURSLIST.length + 1;
    FORMATEURSLIST.push(item);
  }
  delete(index: number) {
    if (index >= 0) FORMATEURSLIST.splice(index, 1);
  }
  getLength() {
    return FORMATEURSLIST.length;
  }
  getFormateur(id: number) {
    return FORMATEURSLIST[id - 1];
  }
}
