import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatgptUiService {

  constructor() { }

  async getOpenAIChat(userInputMessages: Array<any>) {
    const openai = new OpenAI({
      apiKey: environment.OPENAI_API_KEY,
    });
    let messages: Array<OpenAI.Chat.ChatCompletionMessageParam> = [{role: 'system', content: environment.financialAdvSystem}];
    for(let i=0; i< userInputMessages.length; i++) {
      messages.push({
        role: 'user',
        content: userInputMessages[i]
      })
    }
    const defaultConf = environment.defaultConf;

    const response = await openai.chat.completions.create({
      model: environment.OPENAI_MODEL_CHAT,
      messages,
      ...defaultConf
    });

    // const { Configuration, OpenAIApi } = require('openai');
    // const configuration = new Configuration({
    //   apiKey: environment.OPENAI_API_KEY,
    // });
    // const openai = new OpenAIApi(configuration);

    // let messages = [{role: 'system', content: environment.financialAdvSystem}];
    // for(let i=0; i< userInputMessages.length; i++) {
    //   messages.push({
    //     role: 'user',
    //     content: userInputMessages[i]
    //   })
    // }
    // const defaultConf = environment.defaultConf;
    // const chatData = await openai.createChatCompletion({
    //   model: environment.OPENAI_MODEL_CHAT,
    //   messages,
    //   ...defaultConf
    // });
    const resp = response.choices[0].message.content;
    if (resp === 'VOID') {
      return null;
    } else if ( resp && resp.indexOf('symbol_name') >= 0) {
      const stock_name = JSON.parse(resp)['symbol_name'];
      /// get the API call
      return stock_name;
    } else {
      return resp;
    }
  }
}
