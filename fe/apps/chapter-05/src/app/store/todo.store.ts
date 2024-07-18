import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { TodoInterface } from "../interface/todo.interface";
import { TodosService } from "../services/todos.service";
import { inject } from "@angular/core";

type TodosFilter = "all" | "pending" | "completed";

interface TodosState {
  todos: TodoInterface[];
  loading: boolean;
  filter: TodosFilter;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: "all"
}

export const TodosStore = signalStore(
  { providedIn: 'root' }, // Or we can define the store in the providers section of the standalone component
  withState(initialState),
  withMethods((state, todosService = inject(TodosService)) => ({

    async loadAll() {
      patchState(state, { loading: true });
      try {
        const _todos = await todosService.getAllTodos();
        patchState(state, { todos: _todos, loading: false });
      } catch (error) {
        patchState(state, { loading: false });
        console.log(error);
      }
    },

    async addTodo(todo: Partial<TodoInterface>) {
      patchState(state, { loading: true });
      try {
        const _todos = await todosService.addTodo(todo);
        patchState(state, { todos: _todos, loading: false });
      } catch (error) {
        patchState(state, { loading: false });
        console.log(error);
      }
    },

    async deleteTodo(todo: TodoInterface) {
      await todosService.deleteTodo(todo);
      patchState(state, (state) => ({
        todos: state.todos.filter((_todo) => _todo.id !== todo.id)
      }))
    }

  }))
);
