import { Component, Input } from '@angular/core';
import { Task } from "../constants";
import { StatusType } from "../constants";
import { TaskService } from "../task.service";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task;

  statusList: StatusType[] = [StatusType.NotStarted, StatusType.InProgress, StatusType.Completed];

  constructor(private taskService: TaskService) { }

  handleChange(ev) {
    this.taskService.updateTask(this.task.id, ev.target.value)
  }
}
