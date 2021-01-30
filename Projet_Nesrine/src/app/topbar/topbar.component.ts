import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  currentDate = new Date();
  adresse = 'Tunis, Tunisie';
  constructor() {}
  ngOnInit(): void {}
}
