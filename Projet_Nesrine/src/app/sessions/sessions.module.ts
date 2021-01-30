import { NgModule } from '@angular/core';
import { SessionsComponent } from './sessions/sessions.component';
import { BrowserModule } from '@angular/platform-browser';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsEditComponent } from './sessions-edit/sessions-edit.component';
import { SessionsAddComponent } from './sessions-add/sessions-add.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SessionsComponent,
    SessionsListComponent,
    SessionItemComponent,
    SessionsEditComponent,
    SessionsAddComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    FormsModule
  ],
  bootstrap: [SessionsComponent],
  providers: [],
})
export class SessionsModule { }
