enum DragState {
  HandsFree = 'HandsFree',
  Grab = 'Grab',
  Hold = 'Hold',
  Drop = 'Drop',
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  faClock,
  faMinusSquare,
  faSquareCheck,
} from '@fortawesome/free-regular-svg-icons';
import { TaskStatus, Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input() todo!: Todo;
  @Input() index!: number;

  @Output() removeTodo = new EventEmitter<number>();

  @ViewChild('todoItem') todoItemRef!: ElementRef;

  faSquareMinus = faMinusSquare;
  faClock = faClock;
  faSquareCheck = faSquareCheck;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.todoItem = this.todoItemRef.nativeElement as HTMLElement;
    this.elementHalfSize = this.todoItem.clientWidth / 2;
    this.elementOffsetLeft = this.todoItem.offsetLeft;
    this.elementClientLeft = this.todoItem.clientLeft - 1;
  }

  done(): void {}

  removeItem(): void {
    this.removeTodo.emit();
  }

  isTaskDone(): boolean {
    return this.todo.status == TaskStatus.Done;
  }

  TaskStatus = TaskStatus;
  startPos!: number;
  elementClientLeft!: number;
  elementOffsetLeft!: number;
  dragState = DragState.HandsFree;
  elementHalfSize!: number;
  todoItem!: HTMLElement;
  minThreshold = 50;
  maxThreshold = 80;

  getClassBorderClass(): string {
    let returnClass = '';
    switch (this.todo.status) {
      case TaskStatus.Todo:
        returnClass = 'border-fuchsia-400';
        break;
      case TaskStatus.InProcess:
        returnClass = 'border-amber-400';
        break;
      case TaskStatus.Done:
        returnClass = 'border-green-400';
        break;
    }

    return returnClass;
  }

  mouseStart(event: MouseEvent) {
    this.startPos = event.clientX - this.elementOffsetLeft;
    this.dragState = DragState.Grab;
  }

  mouseLeave() {
    if (this.dragState == DragState.Grab || this.dragState == DragState.Hold)
      this.todoItemDrop(this.getCurrentPosition());
  }

  mouseEnd(event: MouseEvent) {
    this.todoItemDrop(this.getCurrentPosition());
  }

  mouseMove(event: MouseEvent) {
    let dragPos = event.clientX - this.elementOffsetLeft;
    if (
      this.dragState != DragState.Grab ||
      dragPos <= this.startPos ||
      this.getCurrentPosition() >= this.maxThreshold
    )
      return;
    this.todoItem.style.transform = `translateX(${dragPos - this.startPos}px)`;
  }

  todoItemDrop(lastPos: number) {
    this.dragState = DragState.Drop;
    let stepLenght = 2;

    let move = setInterval(() => {
      let nextPost = this.getCurrentPosition() - stepLenght;
      this.todoItem.style.transform = `translateX(${nextPost}px)`;

      if (nextPost <= this.elementClientLeft) {
        this.todoItem.style.transform = `translateX(${0}px)`;
        clearInterval(move);

        if (lastPos < this.minThreshold) {
          this.dragState = DragState.HandsFree;
          return;
        }
        switch (this.todo.status) {
          case TaskStatus.Todo:
            this.todo.status = TaskStatus.InProcess;
            break;
          case TaskStatus.InProcess:
            this.todo.status = TaskStatus.Done;
            break;
          case TaskStatus.Done:
            this.todo.status = TaskStatus.Todo;
            break;
        }
      }
    }, 1);
  }

  getDistance(): number {
    let dist = this.startPos - this.getCurrentPosition();
    return dist < 0 ? dist * -1 : dist;
  }

  getCurrentPosition(): number {
    let currentTransformStr = this.todoItem.style.transform.replace(
      'translateX(',
      ''
    );
    currentTransformStr = currentTransformStr.replace('px)', '');

    return +currentTransformStr;
  }
}
