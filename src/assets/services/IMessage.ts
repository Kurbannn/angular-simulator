import { MessageType } from '../../enums/MessageType.enum';

export interface IMessage {
  id: number;
  text: string;
  type: MessageType;
}