import { GoogleGenAI } from '@google/genai';

// Abstraction for AI Providers
// Currently defaults to Gemini, but designed to easily swap to OpenRouter/HuggingFace if needed.

export type AIProvider = 'gemini' | 'openrouter' | 'huggingface';

export interface AIResponse {
  text: string;
}

export const generateContent = async (
  prompt: string,
  imageBase64?: string,
  provider: AIProvider = 'gemini'
): Promise<AIResponse> => {
  if (provider === 'gemini') {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const parts: any[] = [{ text: prompt }];

    if (imageBase64) {
      const base64Data = imageBase64.includes(',')
        ? imageBase64.split(',')[1]
        : imageBase64;

      parts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Data,
        },
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts,
        },
      ],
    });

    if (!response.text) {
      throw new Error('No response received from Gemini.');
    }

    return { text: response.text };
  }

  throw new Error(`Provider ${provider} not implemented yet.`);
};
