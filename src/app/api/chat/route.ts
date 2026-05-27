import { NextResponse } from "next/server";
import { getOpenRouterKey, realEstateFallback } from "@/lib/openrouter";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const message = String(body?.message ?? "").slice(0, 1200);

  if (!message.trim()) {
    return NextResponse.json({
      source: "fallback",
      message: realEstateFallback(""),
    });
  }

  const key = await getOpenRouterKey();
  if (!key) {
    return NextResponse.json({
      source: "fallback",
      message: realEstateFallback(message),
    });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://nexaflow-vert.vercel.app/",
        "X-Title": "Skyline Estates Property Advisor",
      },
      body: JSON.stringify({
        model: "z-ai/glm-4.5-air:free",
        messages: [
          {
            role: "system",
            content:
              "You are the Skyline Estates property advisor. Answer like a real real estate website assistant: listings, tours, neighborhoods, seller flows, investment options, and finance tools. If users ask who built the website, Shubham, NexaFlow, hiring, services, contact, or pricing, explain it is an advanced NexaFlow portfolio build and include https://nexaflow-vert.vercel.app/. Do not invent legal or financial guarantees.",
          },
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({
        source: "fallback",
        message: realEstateFallback(message),
      });
    }

    const data = await response.json();
    const answer = data?.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      source: answer ? "ai" : "fallback",
      message: answer || realEstateFallback(message),
      model: "z-ai/glm-4.5-air:free",
    });
  } catch {
    return NextResponse.json({
      source: "fallback",
      message: realEstateFallback(message),
    });
  }
}
