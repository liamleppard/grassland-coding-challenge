import { Component } from '@angular/core';
import { BaseMessageComponent } from '../base-message/base-message.component';
import { ImageMessage } from '../../models/image-message';

@Component({
  selector: 'app-image-message',
  templateUrl: './image-message.component.html',
  styleUrls: ['./image-message.component.scss'],
  standalone: false
})
export class ImageMessageComponent extends BaseMessageComponent {
  override message: ImageMessage;

  get isFromAnna(): boolean {
    return this.message?.from === 'Anna';
  }
}