import { Component, OnInit } from '@angular/core';
import { Lists, Tasks } from '../items';
import { ListsService } from './../services/lists.service';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  tasks: Tasks[];
  task: Tasks;
  list: Lists[] = [];

  constructor(
    private serviceTask: TasksService,
    private serviceList: ListsService
  ) {}

  ngOnInit() {
    this.serviceList.getMainList().subscribe((list) => (this.list = list));
    this.serviceTask.getTasks().subscribe((tasks) => {
      this.tasks = tasks.filter(
        (task: Tasks) => task.list === this.list['_id']
      );
    });
  }

  doneTask(task: Tasks) {
    task.done = true;
    task.list = null;
    this.serviceTask.updateTask(task).subscribe();
    this.ngOnInit();
  }

  editingTask(task: Tasks) {
    this.serviceTask.updateTask(task).subscribe;
  }

  deleting(_id: number) {
    this.serviceTask.deleteTask(_id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task._id !== _id);
    });
  }
}
