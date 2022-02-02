import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { ApiService } from 'src/app/services/api.service'; 

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos!: ITodo[];
  allTodosChecked = false;
  addTodoItemActive = false;
  newChecked = false;
  newText = "";
  newClass = "not-important";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTodos().subscribe({
      next: todos => this.todos = todos,
      error: err => console.log(err)
    });
  }

  addTodoItem(): void {
    this.addTodoItemActive = true;
  }

  createTodoItem(): void {
    let todo: ITodo = {
      checked: this.newChecked,
      text: this.newText,
      class: this.newClass
    }

    this.apiService.createTodo(todo).subscribe({
      next: todo => this.todos.push(todo),
      error: err => console.log(err)
    });

    this.newChecked = false;
    this.newText = "";
    this.addTodoItemActive = false;
  }

  onTodoDeleted(todo: ITodo): void {
    let index = this.todos.indexOf(todo);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }
}
