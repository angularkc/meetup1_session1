import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ TodoService ]
})
export class TodoComponent implements OnInit {
  public todos: any[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      todos => {
        this.todos = todos;
      }
    )
  }

}
