import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MesageService {
  private messages = signal<string[]>([]);
  allMessages = this.messages.asReadonly();

  addMessage(message: string): void {
    this.messages.update((prevMessage) => [...prevMessage, message]);
  }
}
