import { BehaviorSubject, Observable } from 'rxjs';
import { Task, StatusType } from './constants';


export class TaskService {
  taskList: Task[] = [];
  observer;

  constructor() {
    const data = [{
      id: 1,
      status: StatusType.NotStarted,
      title: "test title",
      description: "desc",
    },
    {
      id: 2,
      status: StatusType.InProgress,
      title: "test title",
      description: "desc",
    },
    {
      id: 3,
      status: StatusType.Completed,
      title: "test title",
      description: "desc",
    }
    ];
    this.taskList = [];
  }

  filterTasks(statusType: StatusType, taskList: Task[] = []): Task[] {
    return taskList.filter((task) => {
      return task.status === statusType;
    });
  };

  getTasks(): Observable<Task[]> {
    return new Observable((observer) => {
      this.observer = observer;
      this.observer.next(this.taskList)
    });
  };

  updateTask(id: number, status: StatusType) {
    this.taskList[id].status = status;
    return this.observer.next(this.taskList);
  };

  addTask(title: string, description: string) {
    this.taskList.push({
      id: this.taskList.length,
      status: StatusType.NotStarted,
      title: title,
      description: description
    });
    this.observer.next(this.taskList);
  };
}
