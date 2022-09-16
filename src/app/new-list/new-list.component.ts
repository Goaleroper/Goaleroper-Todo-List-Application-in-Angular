import { Component, OnInit, Input } from '@angular/core';
import { ListsService } from '../lists.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from './../tasks.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit {
  tasks: any = [];
  list;
  lists: any;
  task;
  listM;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceL: ListsService,
    private serviceT: TasksService
  ) {
    if (this.id)
      this.serviceL.getList(this.id).subscribe((l) => (this.list = l));
  }

  ngOnInit() {
    this.serviceT.getT(this.id).subscribe((tasks) => (this.tasks = tasks));
  }

  onDeleteList() {
    this.serviceL.deleteList(this.id).subscribe(() => {
      this.lists = this.lists.filter((list) => list.id !== this.id);
    });
    this.router.navigate(['/']);
  }

  deleting(_id) {
    this.serviceT.deleteTask(_id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task._id !== _id);
    });
  }

  moveToDailyTasks(task) {
    this.serviceL.getMainList().subscribe((list) => {
      this.listM = list;
      task.list = this.listM._id;
      this.serviceT.updateTask(task).subscribe(task);
      this.ngOnInit();
    });
  }

  editingTask(task) {
    this.serviceT.updateTask(task).subscribe;
  }

  doneTask(task) {
    task.done = true;
    task.list = null;
    this.serviceT.updateTask(task).subscribe(task);
    console.log(task.list);
    this.ngOnInit();
  }
}
