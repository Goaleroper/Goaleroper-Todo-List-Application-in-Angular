import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainListComponent } from './main-list/main-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ListBankComponent } from './list-bank/list-bank.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NewListComponent } from './new-list/new-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NewTaskComponent } from './new-task/new-task.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    ListBankComponent,
    NewListComponent,
    NewTaskComponent,
    DoneTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
