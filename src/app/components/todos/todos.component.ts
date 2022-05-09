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

  ngOnInit(): void {
    this.todoList = [
      new Todo('Learn programming'),
      new Todo('Learn SOLID principles'),
      new Todo('Add new technologies to your toolbox'),
      new Todo('Develop projects for the resume'),
      new Todo('Update your CV'),
      new Todo('Apply for jobs in Europe'),
      new Todo('Get no response'),
      new Todo('Reach recruiters'),
      new Todo(
        'Get rejections like "Thanks for your time. Unfortunately, we are looking for a candidate who currently lives in Europe"'
      ),
      new Todo('GOTO: 3'),
    ];
  }
}
