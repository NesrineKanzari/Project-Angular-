import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from '../participants/participants.service';
import { FormateursService } from '../formateurs/formateurs.service';
import { SessionsService } from '../sessions/sessions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topFormateurs= [{nom:'Kanzari',prenom:'Nessrine'}
  ];
  
  tracksAndSessions = [{track:'MEAN',sessions:0}, {track:'Angular',sessions:0},
  {track:'NodeJS',sessions:0}, {track:'Android',sessions:0}, {track:'Swift',sessions:0}, {track:'Xamarin',sessions:0},{track:'Ionic',sessions:0}];
  sessionsNbr: number;
  formateursNbr:number;
  participantsNbr:number;
  constructor(private sessionItemService: SessionsService, private formateurItemService : FormateursService,private participantItemService : ParticipantsService) {
    this.formateursNbr = formateurItemService.getLength();
    this.sessionsNbr = sessionItemService.getLength();
    this.participantsNbr = participantItemService.getLength();

  }

  ngOnInit(): void {
    this.tracksAndSessions.forEach((item:any)=>{
      item.sessions=this.sessionItemService.getNbrSession(item.track);
    })
  }

}
