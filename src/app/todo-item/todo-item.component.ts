import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../models/todo.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  @Output() changeTodoStatus: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
