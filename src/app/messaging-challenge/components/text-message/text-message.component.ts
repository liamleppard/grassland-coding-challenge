import { Component } from '@angular/core';
import { BaseMessageComponent } from '../base-message/base-message.component';
import { TextMessage } from '../../models/text-message';

@Component({
  selector: 'app-text-message',
  templateUrl: './text-message.component.html',
  styleUrl: './text-message.component.scss',
  standalone: false
})
export class TextMessageComponent extends BaseMessageComponent {
  override message!: TextMessage;

  get isFromAnna(): boolean {
    return this.message.from === 'Anna';
  }
}
