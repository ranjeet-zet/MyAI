import dotenv from "dotenv";
import {
    HarmCategory,
    HarmBlockThreshold,
    GoogleGenerativeAI,
} from "@google/generative-ai";

dotenv.config({
    path: "./.env",
});

var history = [
  
];

const MODEL_NAME = process.env.MODEL_NAME;
const API_KEY = process.env.GEMINI_API;

async function runChat(chatmessage) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 1,
        topK: 0,
        topP: 0.95,
        maxOutputTokens: 10000,
    };


    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history
    });
   
    // const result = await chat.sendMessage(chatmessage);
    history.push({role:'user',parts:[{text:chatmessage}]})
    const result=await model.generateContentStream(chatmessage);
    let text = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      text += chunkText;
    }
    history.push({role:'model',parts:[{text}]})
    return history;
}
export {runChat}