import { Observable } from "rxjs";
import { ITodo } from "../models/todo.interface";

export abstract class ApiServiceBase {
    abstract url: string;
    abstract getTodos(): Observable<ITodo[]>;
    abstract createTodo(todo: ITodo): Observable<ITodo>;
    abstract deleteTodo(todo: ITodo): void;
}