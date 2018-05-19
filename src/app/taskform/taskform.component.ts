import { Component, Output, EventEmitter } from '@angular/core';
import { Task, StatusType } from "../constants";

import { TaskService } from "../task.service";
import { TaskboardComponent } from "../taskboard/taskboard.component";

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {

  obj: any = { title: "", description: "" }
  @Output() onSave = new EventEmitter<Task>();


  constructor(private taskService: TaskService, private displayForm: TaskboardComponent) {
  }

  onSaveTask() {
    this.onSave.emit({
      title: this.obj.title,
      description: this.obj.description,
      id: null,
      status: StatusType.NotStarted
    })
  }

  titleValid() {
    return this.obj.title.length < 3;
  }
  isMinLength() {
    return this.obj.title.length < 3;
  }
}
