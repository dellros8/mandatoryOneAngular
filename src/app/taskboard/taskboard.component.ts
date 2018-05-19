import { Component, Input } from '@angular/core';

import { Task, StatusType } from "../constants";

import { TaskService } from "../task.service";


@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  taskList: Task[] = [];
  statusList: StatusType[] = [StatusType.NotStarted, StatusType.InProgress, StatusType.Completed];
  showTaskForm: boolean = false;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.taskList = tasks;
      });

  }

  filterTasks(statusType: StatusType, taskList: Task[]) {
    return this.taskService.filterTasks(statusType, taskList);
  }

  displayForm() {
    this.showTaskForm = !this.showTaskForm;
  }

  saveTask(obj) {
    this.showTaskForm = !this.showTaskForm;
    this.taskService.addTask(obj.title, obj.description);
  }
}