import {Component, OnInit} from '@angular/core';
import {Todo} from "../models/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Array<Todo> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  //Funktsioon, mis loob uue Todo objekti ja lisab selle todoList massiivi.
  onAddTodo(note: any): void {
    let todo: Todo = new Todo(this.getNextId(), note.noteTitle, note.noteText, false);
    this.todoList.push(todo)
  }

  //Funktsioon, mis tagastab id numbreid, et iga todo objekt saaks omale järgmise väärtuse. 1, 2, 3 jne.
  private getNextId() {
    let nextId = 1;
    if (this.todoList.length > 0) {
      // @ts-ignore
      nextId = this.todoList[this.todoList.length - 1].id;
      nextId++;
    }
    return nextId;
  }

  //Funktsioon, mis muudab todo objekti isComplete väärtust.
  onChangeTodoStatus(todo: Todo) {
    this.todoList.map(function (currentItem) {
      if (currentItem.id === todo.id) {
        currentItem.isComplete = !currentItem.isComplete;
        return;
      }
    })
  }
}
