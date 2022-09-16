import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  tasks: any = [];
  task: any = [];
  listID: number;
  id: any;
  Tid;
  constructor(
    private serviceT: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.Tid = this.route.snapshot.paramMap.get('Tid');
    this.serviceT.getForEdit(this.Tid).subscribe((p) => {
      this.task = p;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  onClickSubmit(task) {
    if (this.Tid) {
      task._id = this.Tid;
      this.serviceT.updateTask(task).subscribe(task);
      console.log(task);
    } else task.list = this.id;
    this.serviceT.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
    this.router.navigate(['/lists/', this.id]);
  }
}
