import { Injectable } from '@angular/core';
import { Session } from './session';
import { SESSIONITEMS } from './sessions';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor() {}
  get() {
    return SESSIONITEMS;
  }
  add(sessionItem: Session) {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
  }
  getNbrSession(track:string){
    return SESSIONITEMS.filter( item =>{
      return item.track == track;
    }).length;
  }
  addParticipant(sessionId: number, participantId: number): boolean {
    let session = SESSIONITEMS.find((item: any) => {
      return item.id == sessionId;
    });
    if (session) {
      if (!session.participants.includes(participantId)) {
        session.participants.push(participantId);
        return true;
      }
    }
    return false;
  }

  delete(sessionItem: Session) {
    let index;
    index = SESSIONITEMS.indexOf(sessionItem);
    if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);
    }
  }
  deleteByParticipant(participantId: number) {
    SESSIONITEMS.forEach((item: any) => {
      let index: number = item.participants.indexOf(participantId);
      if (index != -1) {
        item.participants.splice(index, 1);
      }
    });
  }

  getLength() {
    return SESSIONITEMS.length;
  }
  getSession(id: number) {
    let sessionvar = SESSIONITEMS.find((item: any) => {
      return item.id == id;
    });
    if (sessionvar) {
      return sessionvar;
    } else return null;
  }
}
