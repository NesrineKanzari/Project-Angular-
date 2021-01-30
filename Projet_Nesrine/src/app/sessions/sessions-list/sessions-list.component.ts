import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {
  sessionsList: any;
  constructor(private sessionsService: SessionsService) {
    this.sessionsList = [];
  }

  ngOnInit(): void {
    this.sessionsList = this.sessionsService.get();
  }

}
