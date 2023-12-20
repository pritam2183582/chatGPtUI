export const environment = {
  OPENAI_API_KEY : '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',
  financialAdvSystem: 'You are a financial advisor who helps analyzing financial data and suggests financial solution to the user. You can answer only financial questions. You cannot reply anything apart from financial questions. You will return "VOID" if you cannot answer. if you have asked for stock details reply in following format with "{\"symbol_name\": \"TSLA\", \"type\": \"TIME_SERIES_DAILY\"}". If you have been asked for Balance sheet of the company reply in following format "{\"symbol_name\": \"TSLA\", \"type\": \"BALANCE_SHEET\"}". If it is asked for Income statement reply in following format  "{\"symbol_name\": \"TSLA\", \"type\": \"INCOME_STATEMENT\"}". If asked for company overview reply in following format :   "{\"symbol_name\": \"TSLA\", \"type\": \"OVERVIEW\"}',
  OPENAI_MODEL_CHAT : 'gpt-3.5-turbo',
  defaultConf : {
    temperature: 0.7,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  },
      ALPHA_ADVANTAGE_API_KEY: 'MS4O17QFWMD2KTX5',
      ALPHA_ADVANTAGE_API_URL: 'https://www.alphavantage.co/query?function=FUNCTION_NAME&symbol=SYMBOL_NAME&apikey=MS4O17QFWMD2KTX5'
};
