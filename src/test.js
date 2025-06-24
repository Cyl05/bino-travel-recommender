import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY;

if (API_KEY === 'YOUR_GEMINI_API_KEY' && !process.env.GOOGLE_API_KEY) {
  console.error("Please set the GOOGLE_API_KEY environment variable or replace 'YOUR_GEMINI_API_KEY' in the code.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function suggestAdventureDestinations() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Suggest 3 adventure destinations in India under ₹10,000 for August. For each, provide a brief description of the adventure activities and why it's suitable for August.";

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log(text);

  } catch (error) {
    console.error("An error occurred:", error);
    console.error("Consider checking your API key, internet connection, and model availability.");
  }
}

suggestAdventureDestinations();