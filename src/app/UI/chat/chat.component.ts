import { Component } from '@angular/core';
import { FirstPageComponent } from '../first-page/first-page.component';
import {ChatgptUiService} from 'src/app/Services/cchatgpt-ui.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatgptUiService]
})
export class ChatComponent {


  userInputMsg: string = "";
  hideapp = true
  loaderVisible = false;
  //inputdata="passingvalue"
  data = [{ "ques": 'Hi', "ans": 'Hello There, How can I help you today?' },
  { "ques": 'I need help with financial services to save my earnings.', "ans": 'Certainly I can provide some general guidance on financial services and saving.' }]

  constructor(private  chatAPISvc: ChatgptUiService) {

  }

  ngOnInit() {
    this.chatAPISvc.getOpenAIChat([])

  }

  getdata() {
    if(this.data)
    this.loaderVisible=true
  else
  this.loaderVisible=false


 //this.loaderVisible=false
  }
  OnDisplay(data:string)
  {
    this.hideapp = false
    console.log("data in parent")
    console.log(data)
  //   this.data=data.toString();
  }

  send() {
    if (this.userInputMsg == "")
      this.hideapp = true
    else
      this.hideapp = false

    console.log("click", this.userInputMsg);
    console.log(this.data);

    this.userInputMsg = ""
  }

}
