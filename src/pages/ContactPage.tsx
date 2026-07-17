import { useState } from "react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to place an order with Benefit LLP.");

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: replace with your actual API route / email service
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-blue">
          Get in Touch
        </h1>
        <p className="mt-2 text-ink-soft max-w-md mx-auto">
          Order on WhatsApp, give us a call, or send us a message below.
        </p>
      </div>

      {/* Quick actions */}
      <div className="rounded-3xl bg-brand-blue px-6 md:px-12 py-10 md:py-14 text-center mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-cream">
          Ready to stock up?
        </h2>
        <p className="mt-2 text-cream/75 max-w-md mx-auto">
          Order on WhatsApp for quick confirmation, or give us a call — we're happy to help.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-green hover:bg-brand-green-dark text-cream font-semibold px-7 py-3.5 transition-colors"
          >
            Order on WhatsApp
          </a>
          <a
            href="tel:+919876543210"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-cream hover:bg-white text-brand-blue font-semibold px-7 py-3.5 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div className="max-w-2xl mx-auto rounded-3xl bg-cream-soft px-6 md:px-12 py-10 md:py-14 border border-ink/10">
        <h2 className="font-display text-2xl font-bold text-brand-blue text-center">
          Send us a message
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="focus-ring rounded-xl px-4 py-3 bg-white text-brand-blue placeholder:text-ink-soft/60 border border-ink/10"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="focus-ring rounded-xl px-4 py-3 bg-white text-brand-blue placeholder:text-ink-soft/60 border border-ink/10"
          />
          <textarea
            name="message"
            placeholder="Your Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="focus-ring rounded-xl px-4 py-3 bg-white text-brand-blue placeholder:text-ink-soft/60 border border-ink/10 resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-green hover:bg-brand-green-dark text-cream font-semibold px-7 py-3.5 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "sent" && (
            <p className="text-brand-green text-sm text-center">Thanks! We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </main>
  );
}