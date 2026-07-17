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
    // 'w-full' and 'px-4' ensure it doesn't touch the screen edges on mobile
    <main className="w-full px-4 py-10 md:py-16 lg:max-w-5xl mx-auto">
      
      {/* Header section with responsive font sizes */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue">
          Get in Touch
        </h1>
        <p className="mt-2 text-ink-soft max-w-sm mx-auto text-sm md:text-base">
          Order on WhatsApp, give us a call, or send us a message below.
        </p>
      </div>

      {/* Quick actions: Buttons stack vertically on mobile, horizontally on desktop */}
      <div className="rounded-2xl md:rounded-3xl bg-brand-blue px-6 py-8 md:px-12 md:py-14 text-center mb-10 shadow-lg">
        <h2 className="text-xl md:text-3xl font-bold text-cream">
          Ready to stock up?
        </h2>
        <p className="mt-2 text-cream/75 max-w-sm mx-auto text-sm">
          Order on WhatsApp for quick confirmation or give us a call.
        </p>
        <div className="mt-6 flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center rounded-full bg-brand-green text-cream font-semibold px-8 py-3 transition-transform active:scale-95"
          >
            Order on WhatsApp
          </a>
          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto text-center rounded-full bg-cream text-brand-blue font-semibold px-8 py-3 transition-transform active:scale-95"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Contact form: Takes full width on mobile for better touch access */}
      <div className="max-w-xl mx-auto rounded-2xl md:rounded-3xl bg-cream-soft p-6 md:p-10 border border-ink/10 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-brand-blue text-center">
          Send us a message
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg px-4 py-3 bg-white border border-ink/10 focus:ring-2 focus:ring-brand-green outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg px-4 py-3 bg-white border border-ink/10 focus:ring-2 focus:ring-brand-green outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-lg px-4 py-3 bg-white border border-ink/10 focus:ring-2 focus:ring-brand-green outline-none resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-brand-green text-cream font-semibold py-3.5 mt-2 disabled:opacity-60 transition-all"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}