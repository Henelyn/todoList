import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  newNoteText: string = "";
  newTitleText: string = "";
  @Output() addTodo: EventEmitter<object> = new EventEmitter<object>();
  constructor() { }

  ngOnInit(): void {
  }

}
