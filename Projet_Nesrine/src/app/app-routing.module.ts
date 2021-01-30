import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormateursComponent } from './formateurs/formateurs.component';
import { ParticipantsComponent } from './participants/participants.component';
import { SessionsRoutingModule } from './sessions/sessions-routing.module';
import { SessionsModule } from './sessions/sessions.module';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'sessions',
    loadChildren: () => SessionsRoutingModule
  },
  {
    path: 'formateurs',
    component: FormateursComponent
  },
  { path: 'participants/:id', component: ParticipantsComponent },
  { path: 'participants', component: ParticipantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
