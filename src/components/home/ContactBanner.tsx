import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      // TODO: replace with your actual API route / email service (e.g. /api/contact)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-5 md:px-8 pb-12 sm:pb-16 md:pb-20">
      <div className="rounded-3xl bg-brand-blue px-5 sm:px-6 md:px-12 py-8 sm:py-10 md:py-14">
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-cream text-center">
          Contact Us
        </h2>
        <p className="mt-2 text-sm sm:text-base text-cream/75 text-center max-w-md mx-auto">
          Leave your details below and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="focus-ring rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-cream text-brand-blue placeholder:text-brand-blue/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="focus-ring rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-cream text-brand-blue placeholder:text-brand-blue/50"
          />
          <textarea
            name="message"
            placeholder="Your Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="focus-ring rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-cream text-brand-blue placeholder:text-brand-blue/50 resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-green hover:bg-brand-green-dark text-cream font-semibold text-sm sm:text-base px-7 py-3 sm:py-3.5 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "sent" && (
            <p className="text-cream text-sm text-center">Thanks! We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-200 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}