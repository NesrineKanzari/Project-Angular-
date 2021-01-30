import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsAddComponent } from './sessions-add/sessions-add.component';
import { SessionsEditComponent } from './sessions-edit/sessions-edit.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
    {
        path: '', component: SessionsComponent, children: [
            { path: '', redirectTo: 'list' },
            { path: 'list', component: SessionsListComponent },
            { path: 'edit/:id', component: SessionsEditComponent },
            { path: 'add', component: SessionsAddComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionsRoutingModule { }
