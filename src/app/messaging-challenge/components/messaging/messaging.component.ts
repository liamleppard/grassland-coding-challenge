import { Component } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { Message } from '../../models/message';
import { ImageMessage } from '../../models/image-message';
import { TextMessage } from '../../models/text-message';

@Component({
    selector: 'app-messaging',
    templateUrl: './messaging.component.html',
    styleUrls: ['./messaging.component.scss'],
    standalone: false
})
export class MessagingComponent {
  public messages: Message[] = [];

  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.messagingService.messages$.subscribe((msg) => {
      this.messages.push(msg);
    });
  }

  isTextMessage(message: Message): message is TextMessage {
    return message instanceof TextMessage;
  }
    
  isImageMessage(message: Message): message is ImageMessage {
    return message instanceof ImageMessage;
  }
}
