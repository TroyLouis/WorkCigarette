"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
      setMessage("You're on the list. We'll be in touch.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 rounded-full border-2 border-ink/20 bg-white focus:border-cigarette focus:outline-none focus:ring-2 focus:ring-cigarette/20 transition-all disabled:opacity-60 placeholder:text-ink/50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-full bg-ashed text-white font-medium hover:bg-white hover:text-ashed transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap lowercase"
        >
          {status === "loading" ? "joining…" : "join waitlist"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-3 text-sm ${
            status === "success" ? "text-ashed" : status === "error" ? "text-red-600" : ""
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
