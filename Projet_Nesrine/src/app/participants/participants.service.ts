import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { PARTICIPANTSLIST } from './participants';
import { SESSIONITEMS } from '../sessions/sessions';

@Injectable({
  providedIn: 'root',
})
export class ParticipantsService {
  constructor() {}
  get() {
    return PARTICIPANTSLIST;
  }
  getBySession(id: number) {
    return PARTICIPANTSLIST.filter((item: any) => {
      let obj = SESSIONITEMS.find((s: any) => {
        return s.id == id;
      });
      if (obj) {
        return obj.participants.includes(item.id);
      } else {
        return false;
      }
    });
  }
  add(item: Participant) {
    let participant: any = PARTICIPANTSLIST.find((element) => {
      return item.cin == element.cin;
    });
    if (!participant) {
      PARTICIPANTSLIST.push(item);
    }
  }
  deleteBySession(sessionId: number, participantId: number) {
    let sessions:any = SESSIONITEMS.find((s: any) => {
      return s.id == sessionId;
    });
    if (sessions) {
      sessions.participants.splice(sessions.participants.indexOf(participantId),1);
      let check:any = SESSIONITEMS.find((item:any)=>{
        return item.participants.includes(participantId);
      })
      if(!check){
        this.delete(participantId);
      }
    } else {
      false;
    }
  }

  delete(id: number) {
    PARTICIPANTSLIST.splice(
      PARTICIPANTSLIST.findIndex((item: any) => {
        return item.id == id;
      }),
      1
    );
    
  }
  getLength() {
    return PARTICIPANTSLIST.length;
  }
  getParticipant(id: number) {
    let partvar = PARTICIPANTSLIST.find((item: any) => {
      return item.id == id;
    });
    if (partvar) {
      return partvar;
    } else return null;
  }

  checkByCIN(cin:string){
    let partvar = PARTICIPANTSLIST.find((item: any) => {
      return item.cin == cin;
    });
    if (partvar) {
      return partvar.id;
    } else return false;
  }
}
