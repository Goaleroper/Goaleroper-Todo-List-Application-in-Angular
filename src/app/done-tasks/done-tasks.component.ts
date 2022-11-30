import { Component, OnInit } from '@angular/core';
import { TasksService } from './../services/tasks.service';
import { Tasks } from '../items';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css'],
})
export class DoneTasksComponent implements OnInit {
  tasks: Tasks[];

  constructor(private serviceTask: TasksService) {}

  ngOnInit() {
    this.serviceTask.getDoneTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
