import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ITINERARY_DATA } from '../constants';

// Declare process to avoid TypeScript errors since we are using process.env.API_KEY
declare const process: { env: { API_KEY: string } };

// Initialize Gemini API client using process.env.API_KEY as per guidelines.
// We assume the API key is pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Construct a context string from the itinerary data
const itineraryContext = ITINERARY_DATA.map(day => `
Day ${day.dayId} (${day.date} ${day.weekday}): ${day.route}
Highlight: ${day.highlight}
Activities:
${day.activities.map(act => `- ${act.time} ${act.title}: ${act.description} ${act.location ? `(@ ${act.location})` : ''}`).join('\n')}
`).join('\n\n');

const systemInstruction = `
You are an expert travel assistant for a family trip in Taiwan.
You have access to the family's specific 5-day itinerary (Tainan -> Yilan -> Hualien -> Taitung -> Tainan).

The Itinerary:
${itineraryContext}

Your goal is to help the user with questions related to this trip.
- If they ask about food near a location in the itinerary, provide specific recommendations.
- If they ask about timing, refer to the schedule.
- Keep answers concise, friendly, and helpful for parents traveling with children.
- If asked about weather, remind them to check the forecast but give general seasonal advice for December in Eastern Taiwan (often rainy, cool).
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "抱歉，我現在無法產生回應。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，目前連線有點問題，請稍後再試。";
  }
};
