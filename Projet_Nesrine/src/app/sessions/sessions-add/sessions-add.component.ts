import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../session'
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-sessions-add',
  templateUrl: './sessions-add.component.html',
  styleUrls: ['./sessions-add.component.css']
})
export class SessionsAddComponent implements OnInit {

  constructor(private sessionItemService: SessionsService, private router: Router) { }

  ngOnInit(): void {
  }
  addSession(sessionItem: Session) {
    sessionItem.participants = [];
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
    this.router.navigate(['/sessions']);

  }
}