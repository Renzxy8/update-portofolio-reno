import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    // =========================================
    // ENVIRONMENT VARIABLES
    // =========================================

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const resendApiKey = process.env.RESEND_API_KEY;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio <onboarding@resend.dev>";

    const toEmail = process.env.RESEND_TO_EMAIL;

    // =========================================
    // CEK SUPABASE
    // =========================================

    if (!supabaseUrl || !supabaseKey) {
      console.error(
        "SUPABASE ENVIRONMENT VARIABLES TIDAK TERSEDIA"
      );

      return NextResponse.json(
        {
          success: false,
          message: "Konfigurasi Supabase belum tersedia.",
        },
        { status: 500 }
      );
    }

    // =========================================
    // CEK RESEND
    // =========================================

    if (!resendApiKey || !toEmail) {
      console.error(
        "RESEND ENVIRONMENT VARIABLES TIDAK LENGKAP"
      );

      return NextResponse.json(
        {
          success: false,
          message: "Konfigurasi email belum tersedia.",
        },
        { status: 500 }
      );
    }

    // =========================================
    // CREATE CLIENT
    // =========================================

    const supabase = createClient(
      supabaseUrl,
      supabaseKey
    );

    const resend = new Resend(resendApiKey);

    // =========================================
    // AMBIL DATA FORM
    // =========================================

    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    // =========================================
    // VALIDASI
    // =========================================

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Semua field wajib diisi.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format email tidak valid.",
        },
        { status: 400 }
      );
    }

    console.log("CONTACT FORM RECEIVED");

    // =========================================
    // SIMPAN KE SUPABASE
    // =========================================

    const { error: supabaseError } = await supabase
      .from("contact_messages")
      .insert({
        name: name,
        email: email,
        subject: subject,
        message: message,
      });

    if (supabaseError) {
      console.error("SUPABASE ERROR:", supabaseError);

      return NextResponse.json(
        {
          success: false,
          saved: false,
          emailSent: false,
          message: "Pesan gagal disimpan ke database.",
          error: supabaseError.message,
          details: supabaseError.details,
          hint: supabaseError.hint,
          code: supabaseError.code,
        },
        { status: 500 }
      );
    }

    console.log(
      "SUPABASE SUCCESS: contact message saved"
    );

    // =========================================
    // ESCAPE HTML
    // =========================================

    const escapeHtml = (value: string) => {
      return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);

    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br />"
    );

    // =========================================
    // KIRIM EMAIL RESEND
    // =========================================

    const emailSubject =
      "Portfolio - " + subject;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Portfolio Message</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background: #020617;
    font-family: Arial, sans-serif;
  "
>
  <div
    style="
      max-width: 700px;
      margin: 0 auto;
      padding: 40px 20px;
    "
  >
    <div
      style="
        background: #0f172a;
        border: 1px solid #1e293b;
        border-radius: 16px;
        padding: 30px;
      "
    >
      <h1
        style="
          margin: 0 0 25px;
          color: #22d3ee;
          font-size: 24px;
        "
      >
        New Portfolio Message
      </h1>

      <div
        style="
          margin-bottom: 20px;
          padding: 20px;
          background: #020617;
          border-radius: 12px;
        "
      >
        <p style="color: #cbd5e1; margin: 8px 0;">
          <strong style="color: #94a3b8;">
            Name:
          </strong>
          ${safeName}
        </p>

        <p style="color: #cbd5e1; margin: 8px 0;">
          <strong style="color: #94a3b8;">
            Email:
          </strong>
          ${safeEmail}
        </p>

        <p style="color: #cbd5e1; margin: 8px 0;">
          <strong style="color: #94a3b8;">
            Subject:
          </strong>
          ${safeSubject}
        </p>
      </div>

      <div
        style="
          padding: 20px;
          background: #020617;
          border-radius: 12px;
        "
      >
        <p
          style="
            color: #94a3b8;
            margin-top: 0;
          "
        >
          Message
        </p>

        <p
          style="
            color: #e2e8f0;
            line-height: 1.8;
            margin-bottom: 0;
          "
        >
          ${safeMessage}
        </p>
      </div>

      <p
        style="
          margin-top: 25px;
          color: #64748b;
          font-size: 12px;
        "
      >
        Sent from Reno Wahyu Saputra portfolio contact form.
      </p>
    </div>
  </div>
</body>
</html>
`;

    const { data: emailData, error: resendError } =
      await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
      });

    // =========================================
    // RESEND ERROR
    // =========================================

    if (resendError) {
      console.error("RESEND ERROR:", resendError);

      return NextResponse.json(
        {
          success: false,
          saved: true,
          emailSent: false,
          message:
            "Pesan berhasil disimpan ke database, tetapi email gagal dikirim.",
          error: resendError.message,
          databaseId: null,
        },
        { status: 500 }
      );
    }

    // =========================================
    // SEMUA BERHASIL
    // =========================================

    console.log(
      "EMAIL SUCCESS:",
      emailData?.id
    );

    return NextResponse.json(
      {
        success: true,
        saved: true,
        emailSent: true,
        message: "Pesan berhasil terkirim.",
        databaseId: null,
        emailId: emailData?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT SERVER ERROR:", error);

    const serverError =
      error instanceof Error
        ? error.message
        : String(error);

    return NextResponse.json(
      {
        success: false,
        saved: false,
        emailSent: false,
        message: "Terjadi kesalahan server.",
        error: serverError,
      },
      { status: 500 }
    );
  }
}
