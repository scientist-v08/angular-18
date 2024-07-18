import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, lastValueFrom, switchMap} from "rxjs";
import {TodoInterface} from "../interface/todo.interface";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url: string = environment.Url;
  http = inject(HttpClient);

  async getAllTodos(): Promise<TodoInterface[]> {
    const todos: TodoInterface[] = await firstValueFrom(this.http.get<TodoInterface[]>(this.url));
    return todos;
  }

  async addTodo(todo: Partial<TodoInterface>): Promise<TodoInterface[]> {
    const todos: TodoInterface[] = await lastValueFrom(
      this.http.post<TodoInterface>(this.url, todo)
        .pipe(
          switchMap(() => this.http.get<TodoInterface[]>(this.url))
        )
    );
    return todos;
  }

  async deleteTodo(todo: TodoInterface): Promise<{successMessage: string}> {
    const success: {successMessage: string} = await firstValueFrom(this.http.delete<{successMessage: string}>(this.url+'/'+todo.id));
    return success;
  }

}
