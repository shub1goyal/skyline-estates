"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  source?: "ai" | "fallback";
};

const starters = [
  "Find a family home",
  "Compare investor options",
  "Tell me about Shubham",
  "Help me choose a location",
];

function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g);
  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a href={part} key={`${part}-${index}`} target="_blank" rel="noreferrer">
          {part}
        </a>
      );
    }
    if (/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(part)) {
      return (
        <a href={`mailto:${part}`} key={`${part}-${index}`}>
          {part}
        </a>
      );
    }
    return part;
  });
}

export function Advisor() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Welcome to Skyline Estates. Ask about listings, neighborhoods, EMI estimates, seller support, tours, or investment options.",
      source: "fallback",
    },
  ]);

  const status = useMemo(() => {
    const last = messages[messages.length - 1];
    if (loading) return "Thinking...";
    if (last?.source === "ai") return "AI response";
    if (last?.source === "fallback") return "Stored fallback";
    return "Ready";
  }, [loading, messages]);

  async function ask(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((current) => [...current, { role: "user", content: clean }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.message,
          source: data.source === "ai" ? "ai" : "fallback",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I can still answer from stored property knowledge. Skyline Estates includes listings, buyer filters, comparison, EMI tools, neighborhoods, seller intake, agent profiles, and tour requests.",
          source: "fallback",
        },
      ]);
    } finally {
      setLoading(false);
      requestAnimationFrame(() =>
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight }),
      );
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <>
      <button className="advisor-launch" type="button" aria-label="Open advisor" onClick={() => setOpen(true)}>
        <MessageCircle />
      </button>
      {open ? (
        <aside className="advisor-panel" aria-label="Property advisor">
          <div className="advisor-head">
            <div>
              <strong>Property Advisor</strong>
              <span>{status}</span>
            </div>
            <button className="icon-btn" type="button" aria-label="Close advisor" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="advisor-body" ref={scrollRef}>
            {messages.map((message, index) => (
              <div className={`message ${message.role === "user" ? "user" : "bot"}`} key={index}>
                {linkify(message.content)}
              </div>
            ))}
            {loading ? <div className="message bot">Thinking...</div> : null}
          </div>
          <div className="quick-prompts">
            {starters.map((starter) => (
              <button key={starter} type="button" onClick={() => ask(starter)}>
                {starter}
              </button>
            ))}
          </div>
          <form className="advisor-form" onSubmit={submit}>
            <input
              aria-label="Ask advisor"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about listings, EMI, tours..."
            />
            <button type="submit" aria-label="Send">
              <Send size={18} />
            </button>
          </form>
        </aside>
      ) : null}
    </>
  );
}
