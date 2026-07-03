"use server";

import { products } from "@/lib/data";

const API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`;

export type Message = {
  role: "user" | "model";
  content: string;
};

export async function generateChatResponse(history: Message[], newMessage: string) {
  try {
    if (!API_KEY) {
      console.error("Missing GEMINI_API_KEY");
      return { success: false, text: "Hệ thống chưa được cấu hình API Key. Vui lòng thêm GEMINI_API_KEY vào biến môi trường." };
    }

    // Build context about our products
    const productContext = products.map(
      (p) => `- ${p.name} ($${p.price}): ${p.tagline}. Features: ${p.features.map(f => f.title).join(", ")}.`
    ).join("\n");

    const systemInstruction = `You are a helpful, enthusiastic customer support AI for Nova, a premium audio technology brand. 
Your goal is to assist customers with product inquiries, recommendations, and information.
Always be concise, polite, and use Vietnamese by default unless the user speaks English.

Here is the current product catalog you should use to answer questions:
${productContext}

Do not make up products or prices that are not in the catalog.
`;

    // Convert history to Gemini format
    const contents = history.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    // Add the new user message
    contents.push({
      role: "user",
      parts: [{ text: newMessage }],
    });

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": API_KEY,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemInstruction }],
        },
        contents: contents,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", errorText);
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Xin lỗi, tôi đang gặp chút sự cố kết nối. Bạn thử lại sau nhé!";
    
    return { success: true, text: botText };
  } catch (error) {
    console.error("Chat Action Error:", error);
    return { success: false, text: "Xin lỗi, tôi đang gặp lỗi kỹ thuật. Vui lòng thử lại sau." };
  }
}
