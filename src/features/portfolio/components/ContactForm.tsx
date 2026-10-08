"use client";

import {
  FormEvent,
  useState,
} from "react";

export default function ContactForm() {
  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] =
    useState<{
      type:
        | "success"
        | "error"
        | "";

      message: string;
    }>({
      type: "",
      message: "",
    });

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    const data = {
      name: String(
        formData.get("name") || ""
      ).trim(),

      email: String(
        formData.get("email") || ""
      ).trim(),

      subject: String(
        formData.get("subject") || ""
      ).trim(),

      message: String(
        formData.get("message") || ""
      ).trim(),
    };

    try {
      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              data
            ),
          }
        );

      const result =
        await response.json();

      console.log(
        "CONTACT RESPONSE:",
        result
      );

      // =====================================
      // SEMUA BERHASIL
      // =====================================

      if (
        response.ok &&
        result.success === true &&
        result.saved === true &&
        result.emailSent === true
      ) {
        setStatus({
          type: "success",

          message:
            "Pesan berhasil terkirim.",
        });

        form.reset();

        return;
      }

      // =====================================
      // ERROR
      // =====================================

      setStatus({
        type: "error",

        message:
          result.message ||
          "Pesan gagal dikirim.",
      });

      console.error(
        "CONTACT ERROR:",
        result
      );

    } catch (error) {
      console.error(
        "FETCH ERROR:",
        error
      );

      setStatus({
        type: "error",

        message:
          "Tidak dapat terhubung ke server.",
      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* =====================================
          NAME
      ===================================== */}

      <div>
        <label
          htmlFor="name"
          className="
            mb-2
            block
            font-mono
            text-[10px]
            uppercase
            tracking-widest
            text-slate-500
          "
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className="
            w-full
            rounded-xl
            border
            border-slate-800
            bg-slate-950
            px-4
            py-3
            text-sm
            text-white
            outline-none
            transition
            placeholder:text-slate-600
            focus:border-cyan-400
          "
        />
      </div>

      {/* =====================================
          EMAIL
      ===================================== */}

      <div>
        <label
          htmlFor="email"
          className="
            mb-2
            block
            font-mono
            text-[10px]
            uppercase
            tracking-widest
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
          autoComplete="email"
          placeholder="you@example.com"
          className="
            w-full
            rounded-xl
            border
            border-slate-800
            bg-slate-950
            px-4
            py-3
            text-sm
            text-white
            outline-none
            transition
            placeholder:text-slate-600
            focus:border-cyan-400
          "
        />
      </div>

      {/* =====================================
          SUBJECT
      ===================================== */}

      <div>
        <label
          htmlFor="subject"
          className="
            mb-2
            block
            font-mono
            text-[10px]
            uppercase
            tracking-widest
            text-slate-500
          "
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Project inquiry"
          className="
            w-full
            rounded-xl
            border
            border-slate-800
            bg-slate-950
            px-4
            py-3
            text-sm
            text-white
            outline-none
            transition
            placeholder:text-slate-600
            focus:border-cyan-400
          "
        />
      </div>

      {/* =====================================
          MESSAGE
      ===================================== */}

      <div>
        <label
          htmlFor="message"
          className="
            mb-2
            block
            font-mono
            text-[10px]
            uppercase
            tracking-widest
            text-slate-500
          "
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Write your message..."
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-slate-800
            bg-slate-950
            px-4
            py-3
            text-sm
            text-white
            outline-none
            transition
            placeholder:text-slate-600
            focus:border-cyan-400
          "
        />
      </div>

      {/* =====================================
          STATUS
      ===================================== */}

      {status.message && (
        <div
          role="alert"
          className={`
            rounded-xl
            border
            px-4
            py-3
            font-mono
            text-xs
            ${
              status.type ===
              "success"
                ? "border-emerald-400/30 bg-emerald-400/5 text-emerald-300"
                : "border-red-400/30 bg-red-400/5 text-red-300"
            }
          `}
        >
          {status.message}
        </div>
      )}

      {/* =====================================
          SUBMIT
      ===================================== */}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-xl
          border
          border-cyan-400/50
          bg-cyan-400/5
          px-5
          py-3
          font-mono
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-cyan-300
          transition
          hover:bg-cyan-400/10
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading
          ? "Mengirim..."
          : "Kirim Pesan →"}
      </button>

    </form>
  );
}