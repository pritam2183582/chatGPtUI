import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {

  @Output() newEvent =new EventEmitter<string>();
 
  loaderVisible = false;
  data=[{ "ques": 'message', "ans": 'answer' },
  { "ques": 'message2', "ans": 'answer2' }]

  message1(value:string)
  {
   
    console.log("message1")
    console.log("data in child ")
    console.log(value)
    this.newEvent.emit(value);
    
  }



  message2(value:string)
  {
    console.log("message2")

    console.log(value)
    this.newEvent.emit(value);
    

  }

}
