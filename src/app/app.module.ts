import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { OpenAI } from 'openai';
import { AppComponent } from './app.component';
import { ChatComponent } from './UI/chat/chat.component';
import { SampleComponent } from './UI/sample/sample.component';
import { FirstPageComponent } from './UI/first-page/first-page.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    FirstPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
