import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MessagingComponent } from './messaging-challenge/components/messaging/messaging.component';
import { MatCardModule } from '@angular/material/card';
import { TextMessageComponent } from './messaging-challenge/components/text-message/text-message.component';
import { ImageMessageComponent } from './messaging-challenge/components/image-message/image-message.component';

@NgModule({
    declarations: [
        AppComponent,
        MessagingComponent,
        TextMessageComponent,
        ImageMessageComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        MatMenuModule,
        MatCardModule
    ], providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule {}
