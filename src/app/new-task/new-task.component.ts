import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from '../items';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  tasks: Tasks[]=[];
  task: Tasks[] = [];
  id: string;
  taskId: string;

  constructor(
    private serviceTask: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('taskId');

    this.serviceTask.getForEdit(this.taskId).subscribe((task) => {
      this.task = task;
    });

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  onClickSubmit(task:Tasks[]) {
    if (this.taskId) {
      task['_id'] = this.taskId;
      this.serviceTask.updateTask(task).subscribe();
    } else task['list'] = this.id;
    this.serviceTask.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
    this.router.navigate(['/lists/', this.id]);
  }
}
