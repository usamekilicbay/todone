import { Component, OnInit } from '@angular/core';
import {
  faSquareMinus,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import { TaskStatus, Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor() {}

  faSquareMinus = faSquareMinus;
  faSquarePlus = faSquarePlus;

  inputTodo: string = '';

  todoList!: Todo[];

  addTodo(): void {
    if (this.inputTodo === '') return;

    this.todoList.push(new Todo(this.inputTodo));

    this.inputTodo = '';

    localStorage.setItem('savedTodos', JSON.stringify(this.todoList));
    console.log(localStorage.getItem('savedTodos'));
  }

  done(id: number): void {
    this.todoList[id].status = TaskStatus.Done;
  }

  removeTodo(id: number): void {
    this.todoList = this.todoList.filter((v, i) => i !== id);
  }

  getStrokeColorsByHighestPercentage(): [string, string] {
    let outerStrokeColor = '';
    let innerStrokeColor = '';

    let highest = this.getTodoAsPercentage();
    console.log(highest);

    if (this.getInProcessTodoAsPercentage() >= highest)
      highest = this.getInProcessTodoAsPercentage();

    if (this.getCompletedTodoAsPercentage() >= highest)
      highest = this.getCompletedTodoAsPercentage();

    switch (highest) {
      case this.getCompletedTodoAsPercentage():
        outerStrokeColor = '#4ade80';
        innerStrokeColor = '#bbf7d0';
        break;
      case this.getInProcessTodoAsPercentage():
        outerStrokeColor = '#fbbf24';
        innerStrokeColor = '#fde68a';
        break;
      default:
        outerStrokeColor = '#e879f9';
        innerStrokeColor = '#f5d0fe';
        break;
    }

    return [outerStrokeColor, innerStrokeColor];
  }

  // let innerStrokeColor = '#fbbf24';
  getTodoCount(): number {
    return (
      this.todoList.length -
      this.getInProcessTodoCount() -
      this.getCompletedTodoCount()
    );
  }

  getInProcessTodoCount(): number {
    let inProcessTodoCount = 0;
    this.todoList.forEach((element) => {
      if (element.status == TaskStatus.InProcess) inProcessTodoCount++;
    });

    return inProcessTodoCount;
  }

  getCompletedTodoCount(): number {
    let completedTodoCount = 0;
    this.todoList.forEach((element) => {
      if (element.status == TaskStatus.Done) completedTodoCount++;
    });

    return completedTodoCount;
  }

  getCompletedTodoAsPercentage(): number {
    let percentageVal = 100 / this.todoList.length;
    return percentageVal * this.getCompletedTodoCount();
  }

  getInProcessTodoAsPercentage(): number {
    let percentageVal = 100 / this.todoList.length;
    return percentageVal * this.getInProcessTodoCount();
  }

  getTodoAsPercentage(): number {
    let percentageVal = 100 / this.todoList.length;
    return percentageVal * this.getTodoCount();
  }

  ngOnInit(): void {
    this.todoList = [
      new Todo('Programming Fundamentals'),
      new Todo('C#'),
      new Todo('Object-Oriented Programming'),
      new Todo('SOLID Principles'),
      new Todo('Understand DRY, KISS, YAGNI'),
      new Todo('.NET Fundamentals'),
      new Todo('ASP.NET'),
      new Todo('MVC'),
      new Todo('MSSQL'),
      new Todo('Entity Framework'),
      new Todo('SignalR'),
      new Todo('.NET Identity'),
      new Todo('xUnit'),
      new Todo('Web API'),
      new Todo('HTML/CSS'),
      new Todo('BOOTSTRAP'),
      new Todo('Tailwind CSS'),
      new Todo('JavaScript/TypeScript'),
      new Todo('jQuery'),
      new Todo('Hate and quit jQuery'),
      new Todo('Angular'),
      new Todo('Azure'),
      new Todo('RabbitMQ'),
      new Todo('Docker'),
      new Todo('Kubernetes'),
      new Todo('Data Structure & Algorithms'),
      // new Todo('Learn programming'),
      // new Todo('Learn SOLID principles'),
      // new Todo('Add new technologies to your toolbox'),
      // new Todo('Develop projects for the resume'),
      // new Todo('Update your CV'),
      // new Todo('Apply for jobs in Europe'),
      // new Todo('Get no response'),
      // new Todo('Reach recruiters'),
      // new Todo(
      //   'Get rejections like "Thanks for your time. Unfortunately, we are looking for a candidate who currently lives in Europe"'
      // ),
      // new Todo('GOTO: 3'),
    ];
  }
}
