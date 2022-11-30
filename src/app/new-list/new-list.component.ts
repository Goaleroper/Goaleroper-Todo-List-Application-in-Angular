import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListsService } from '../services/lists.service';
import { Lists, Tasks } from '../items';
import { TasksService } from './../services/tasks.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit {
  tasks: Tasks[];
  lists: Lists[] = [];
  task: Tasks;
  list: Lists[] = [];
  listM: Lists;
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceList: ListsService,
    private serviceTask: TasksService
  ) {}

  ngOnInit() {
    if (this.id)
      this.serviceList.getList(this.id).subscribe((list) => (this.list = list));

    this.serviceTask.getT(this.id).subscribe((tasks) => (this.tasks = tasks));
  }

  onDeleteList() {
    this.serviceList.deleteList(this.id).subscribe(() => {
      this.lists = this.lists.filter((list) => list['id'] !== this.id);
    });
    this.router.navigate(['/']);
  }

  deleting(_id: number) {
    this.serviceTask.deleteTask(_id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task._id !== _id);
    });
  }

  moveToDailyTasks(task: Tasks) {
    this.serviceList.getMainList().subscribe((list) => {
      this.listM = list;
      task.list['id'] = this.listM._id;
      this.serviceTask.updateTask(task).subscribe();
      this.ngOnInit();
    });
  }

  editingTask(task: Tasks) {
    this.serviceTask.updateTask(task).subscribe;
  }

  doneTask(task: Tasks) {
    task.done = true;
    task.list = null;
    this.serviceTask.updateTask(task).subscribe();
    this.ngOnInit();
  }
}
