import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ITodo;
  @Output() deletedEvent = new EventEmitter<ITodo>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  deleteItem(): void {
    let todo = {
      checked: this.todo.checked,
      text: this.todo.text,
      class: this.todo.class
    };
    this.apiService.deleteTodo(todo).subscribe({
      next: _ => this.deletedEvent.emit(this.todo),
      error: err => console.log(err)
    });
  }
}
