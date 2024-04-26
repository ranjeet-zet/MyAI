import express, { json } from "express";
import dotenv from "dotenv";
import { runChat } from "./google.js";
import {
    HarmCategory,
    HarmBlockThreshold,
    GoogleGenerativeAI,
} from "@google/generative-ai";

dotenv.config({
    path: "./.env",
});

const app = express();
app.use(json())



app.get("/",async (req, res) => {
  const {chaMessage}=req.body
  const response=await runChat(chaMessage);
    res.status(200).send({response});
});

export { app };
