import { Component, OnInit } from '@angular/core';
import {
  faSquareMinus,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import {
  getCareerPathTodos,
  getDotnetFullStackTodos,
} from 'src/app/datas/exampleTodos';
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
  todoList: Todo[] = [];

  ngOnInit(): void {}

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
    // console.log(highest);

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

  loadCareerPathTodos(): void {
    this.todoList = getCareerPathTodos();
  }

  loadDotnetFullStackTodos(): void {
    this.todoList = getDotnetFullStackTodos();
  }
}
