import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'baseURL',
      useValue: 'https://localhost:7187/api/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
