"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Gagal mengirim pesan."
        );
      }

      setStatus("✓ Pesan berhasil dikirim!");

      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Gagal mengirim pesan."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-950/50
        p-5
        backdrop-blur-xl
        sm:p-6
      "
    >

      {/* HEADER */}

      <div className="mb-6">

        <p
          className="
            font-mono
            text-[10px]
            uppercase
            tracking-[.25em]
            text-violet-300
          "
        >
          Send_Message
        </p>

        <h3
          className="
            mt-2
            font-display
            text-2xl
            font-semibold
            text-white
          "
        >
          Kirim pesan
        </h3>

      </div>


      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* NAMA */}

        <div>

          <label
            htmlFor="name"
            className="
              mb-2
              block
              font-mono
              text-[10px]
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Nama
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Nama kamu"
            className="
              w-full
              rounded-xl
              border
              border-slate-800
              bg-[#020617]/80
              px-4
              py-3
              text-sm
              text-white
              outline-none
              transition
              placeholder:text-slate-600
              focus:border-cyan-400/60
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />

        </div>


        {/* EMAIL */}

        <div>

          <label
            htmlFor="email"
            className="
              mb-2
              block
              font-mono
              text-[10px]
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email@example.com"
            className="
              w-full
              rounded-xl
              border
              border-slate-800
              bg-[#020617]/80
              px-4
              py-3
              text-sm
              text-white
              outline-none
              transition
              placeholder:text-slate-600
              focus:border-cyan-400/60
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />

        </div>


        {/* SUBJEK */}

        <div>

          <label
            htmlFor="subject"
            className="
              mb-2
              block
              font-mono
              text-[10px]
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Subjek
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Contoh: Kerja sama project"
            className="
              w-full
              rounded-xl
              border
              border-slate-800
              bg-[#020617]/80
              px-4
              py-3
              text-sm
              text-white
              outline-none
              transition
              placeholder:text-slate-600
              focus:border-violet-400/60
              focus:ring-2
              focus:ring-violet-400/10
            "
          />

        </div>


        {/* PESAN */}

        <div>

          <label
            htmlFor="message"
            className="
              mb-2
              block
              font-mono
              text-[10px]
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Pesan
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tulis pesan kamu..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-800
              bg-[#020617]/80
              px-4
              py-3
              text-sm
              text-white
              outline-none
              transition
              placeholder:text-slate-600
              focus:border-cyan-400/60
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />

        </div>


        {/* STATUS */}

        {status && (
          <div
            className="
              rounded-xl
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-4
              py-3
              font-mono
              text-xs
              text-cyan-300
            "
          >
            {status}
          </div>
        )}


        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-cyan-300/50
            bg-gradient-to-r
            from-cyan-400/10
            via-blue-500/10
            to-violet-500/10
            px-5
            py-3.5
            font-mono
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-cyan-200
            shadow-[0_0_30px_rgba(34,211,238,.08)]
            transition
            hover:-translate-y-0.5
            hover:border-cyan-300
            hover:text-white
            hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {loading
            ? "Mengirim..."
            : "Kirim Pesan →"}
        </button>

      </form>

    </div>
  );
}