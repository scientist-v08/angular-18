import {Component, ElementRef, inject, OnInit, ViewChild} from "@angular/core";
import {TodosStore} from "../store/todo.store";
import {TodoInterface} from "../interface/todo.interface";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  standalone: true
})
export class MainComponent implements OnInit {
  store = inject(TodosStore);
  @ViewChild('newTodo') inputTitle!: ElementRef;

  ngOnInit() {
    this.store.loadAll();
  }

  onAddTodo(): void {
    const newTodo: Partial<TodoInterface> = {
      title: this.inputTitle.nativeElement.value,
      done: false
    }
    this.store.addTodo(newTodo);
    this.inputTitle.nativeElement.value = '';
  }

  onDeleteTodo(todo: TodoInterface): void {
    this.store.deleteTodo(todo);
  }

}
