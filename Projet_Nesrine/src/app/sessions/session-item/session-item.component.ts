import { Component, Input, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service'
@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session: any;
  constructor(private sessionsService: SessionsService) { }

  ngOnInit(): void {
  }
  onDelete() {
    this.sessionsService.delete(this.session);
  }
}
