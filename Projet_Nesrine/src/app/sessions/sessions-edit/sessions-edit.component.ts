import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from '../session';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-sessions-edit',
  templateUrl: './sessions-edit.component.html',
  styleUrls: ['./sessions-edit.component.css']
})
export class SessionsEditComponent implements OnInit {

  id: any;
  private sub: any;
  session: any;
  tracks = ['MEAN', 'Angular',
    'NodeJS', 'Android', 'Swift', 'Xamarin','Ionic'];
  constructor(private route: ActivatedRoute, private sessionItemService: SessionsService, private router: Router) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
    console.log('Session ID ' + this.id.toString());
    this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem: Session) {

    console.log(sessionItem);
    this.router.navigate(['/sessions']);
  }
}
