import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todone';

  @ViewChild('draggableElem') draggableElem!: ElementRef;

  drag(event: MouseEvent) {
    // console.log('moving');
    if (this.draggableElem == null) return;

    let draggableItem = this.draggableElem.nativeElement as HTMLElement;
    // draggableItem.textContent = event.clientX.toString();
    let elSize = draggableItem.clientWidth / 2;
    let dragPos = event.clientX - elSize;
    draggableItem.textContent = dragPos.toString();
    draggableItem.style.left = dragPos.toString() + 'px';
    // draggableItem.style.transform = `translate3d(${dragPos}px, 0px, 0px)`;
  }

  i = 0;
  drop() {
    this.i++;
    // console.log(this.draggableElem);
    if (this.draggableElem == null) return;

    let draggableItem = this.draggableElem.nativeElement as HTMLElement;
    draggableItem.textContent = this.i.toString();
    // draggableItem.style.transform = 'translate3d(2000px, 0px, 0px)';
  }
}
