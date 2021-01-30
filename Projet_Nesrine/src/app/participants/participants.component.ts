import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from '../sessions/sessions.service';
import { Participant } from './participant';
import { ParticipantsService } from './participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  usedCin : boolean = false;
  participantsList: any;
  aModifier: number = -1;
  newParticipant: Boolean = false;
  currentSessionId: number = -1;
  sub: any;
  constructor(
    private route: ActivatedRoute,
    private participantService: ParticipantsService,
    private sessionService: SessionsService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: any) => {
      if (params['id']) {
        this.currentSessionId = params['id'];
      }
    });
    this.refreshData();
  }
  checkCIN(event :any){
    let cinExists = this.participantService.checkByCIN(event.target.value);
    if(cinExists) this.usedCin = true; else this.usedCin=false;
  }
  ajouter(): void {
    this.newParticipant = true;
  }

  modifier(index: number): void {
    this.aModifier = index;
    console.log(this.participantsList);
  }

  supprimer(id: number): void {
    if (this.currentSessionId == -1) {
      this.participantService.delete(id);
      this.sessionService.deleteByParticipant(id);
    } else {
      this.participantService.deleteBySession(this.currentSessionId, id);
    }
    this.refreshData();
  }

  submit(item: Participant): void {
    this.newParticipant = false;
    this.usedCin = false;
    let cinExists = this.participantService.checkByCIN(item.cin);
    if (cinExists) item.id = cinExists;
    else
      item.id =
        Math.max(
          ...this.participantService.get().map((item: any) => {
            return item.id;
          })
        ) + 1;

    let check = this.sessionService.addParticipant(
      this.currentSessionId,
      item.id
    );
    if (check) {
      if (!cinExists) {
        this.participantService.add(item);
      } else {
        window.alert('Cin existe => il était ajouté au session');
      }
      this.refreshData();
    } else {
      window.alert('Something went wrong');
    }
  }

  refreshData() {
    if (this.currentSessionId != -1) {
      this.participantsList = this.participantService.getBySession(
        this.currentSessionId
      );
    } else {
      this.participantsList = this.participantService.get();
    }
    console.log(this.participantsList);
    console.log(this.sessionService.get());
  }
}
