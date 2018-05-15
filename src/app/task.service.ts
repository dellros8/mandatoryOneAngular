import { BehaviorSubject, Observable } from 'rxjs';
import { Task, StatusType } from './constants';


export class TaskService {
  taskList: Task[] = [];
  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject
  constructor() {
    this.taskList = [{
      id: 1,
      status: StatusType.NotStarted,
      title: "test title",
      description: "desc",
    }]
  }

  getTasks(status: StatusType): Observable<Task[]> {

    // return an observable of a task array, filtered by the passed in status...
    return Observable.of(
      this.taskList
    )

  }

  updateTask(id: number, status: StatusType) {
    
  }

  addTask(title: string, description: string) {
    // complete the code to add a task...
  }
}
