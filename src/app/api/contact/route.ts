import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Ambil environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio <onboarding@resend.dev>";
    const toEmail =
      process.env.RESEND_TO_EMAIL ||
      "renow381@gmail.com";

    // Cek API key
    if (!apiKey) {
      console.error("RESEND_API_KEY belum dikonfigurasi.");

      return NextResponse.json(
        {
          success: false,
          message: "Konfigurasi email belum tersedia.",
        },
        { status: 500 }
      );
    }

    // Buat Resend setelah API key tersedia
    const resend = new Resend(apiKey);

    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    // Validasi form
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Semua field wajib diisi.",
        },
        { status: 400 }
      );
    }

    console.log("CONTACT FORM:", {
      name,
      email,
      subject,
      message,
    });

    // Kirim email
    const { data, error } =
      await resend.emails.send({
        from: fromEmail,

        to: [toEmail],

        replyTo: email,

        subject: `Portfolio — ${subject}`,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              background:#020617;
              color:#e2e8f0;
              padding:40px;
            "
          >

            <div
              style="
                max-width:600px;
                margin:auto;
                background:#07101f;
                border:1px solid #164e63;
                border-radius:18px;
                padding:30px;
              "
            >

              <h1 style="color:#22d3ee;">
                Pesan Baru
              </h1>

              <p>
                Ada pesan baru dari portfolio kamu.
              </p>

              <hr
                style="
                  border:none;
                  border-top:1px solid #1e293b;
                  margin:25px 0;
                "
              />

              <p>
                <strong>Nama:</strong><br/>
                ${name}
              </p>

              <p>
                <strong>Email:</strong><br/>
                ${email}
              </p>

              <p>
                <strong>Subjek:</strong><br/>
                ${subject}
              </p>

              <p>
                <strong>Pesan:</strong><br/>
                ${message}
              </p>

              <hr
                style="
                  border:none;
                  border-top:1px solid #1e293b;
                  margin:25px 0;
                "
              />

              <p
                style="
                  color:#64748b;
                  font-size:12px;
                "
              >
                Reno Wahyu — UI/UX & Graphic Designer
              </p>

            </div>

          </div>
        `,
      });

    // Cek error Resend
    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return NextResponse.json({
      success: true,
      message: "Email berhasil dikirim.",
      id: data?.id,
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server.",
      },
      { status: 500 }
    );
  }
}