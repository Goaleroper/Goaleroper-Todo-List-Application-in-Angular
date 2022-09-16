import { Component, OnInit } from '@angular/core';
import { TasksService } from './../tasks.service';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css'],
})
export class DoneTasksComponent implements OnInit {
  tasks: any = [];
  task;

  constructor(private serviceT: TasksService) {}

  ngOnInit() {
    this.serviceT.getDoneTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
