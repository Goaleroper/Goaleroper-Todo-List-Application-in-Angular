import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Tasks } from './items';
import { ListsService } from './../lists.service';
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  tasks: Tasks[] = [];
  task: any = [];
  list;

  constructor(private serviceT: TasksService, private serviceL: ListsService) {}
  ngOnInit() {
    this.serviceL.getMainList().subscribe((list) => (this.list = list));
    this.serviceT.getTasks().subscribe((tasks) => {
      this.tasks = tasks.filter((task) => task.list === this.list._id);
    });
  }
  doneTask(task) {
    task.done = true;
    task.list = null;
    this.serviceT.updateTask(task).subscribe(task);
    console.log(task.list);
    this.ngOnInit();
  }
  editingTask(task) {
    this.serviceT.updateTask(task).subscribe;
  }
  deleting(_id) {
    this.serviceT.deleteTask(_id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task._id !== _id);
    });
  }
}
