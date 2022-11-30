import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainListComponent } from './main-list/main-list.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';

const routes: Routes = [
  { path: '', component: MainListComponent },
  { path: 'lists/:id', component: NewListComponent },
  { path: 'newtask/:id', component: NewTaskComponent },
  { path: 'newtask/:id/:taskId', component: NewTaskComponent },
  { path: 'donetask', component: DoneTasksComponent },
  { path: '**', component: MainListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
