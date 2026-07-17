import { Injectable } from '@angular/core';
import { Message } from '../interfaces/MessageInterface';
import { MessageType } from '../../enums/MessageType.enum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [];
  private nextId: number = 1;

  get activeMessages(): Message[] {
    return this.messages;
  }

  addMessage(text: string, type: MessageType = MessageType.Info): void {
    const newMessage: Message = {
      id: this.nextId++,
      text,
      type
    };
    this.messages.push(newMessage);

    setTimeout(() => {
      this.closeMessage(newMessage.id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter((msg: Message): boolean => msg.id !== id);
  }
}