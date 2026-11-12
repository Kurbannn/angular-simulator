import { MessageType } from '../../enums/MessageType.enum';

export interface Message {
  id: number;
  text: string;
  type: MessageType;
}