import { GoogleGenAI } from "@google/genai";

export const generateRomanticPoem = async (): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Write a short, very romantic, sweet, and sincere rhyming poem (maximum 12 lines) apologizing to my girlfriend for falling asleep and not checking her messages. Focus on how much I love her and how she is my priority. Do not include a title.",
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Roses are red, violets are blue, I'm sorry I slept, I love only you.";
  } catch (error) {
    console.error("Error generating poem:", error);
    throw error;
  }
};