import { Component } from '@angular/core';

import { StatusType } from "../constants";

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  private statusList = [StatusType.NotStarted, StatusType.InProgress, StatusType.Completed];

  constructor() {
  }

  ngOnInit() {
  }
}
