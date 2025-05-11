import { Component } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { Message } from '../../models/message';

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
        this.messagingService.messages$.subscribe((msgs) => {
            this.messages = msgs;
        });
    }
}
