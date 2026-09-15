import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

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

    const { data, error } =
      await resend.emails.send({
        from:
          process.env.RESEND_FROM_EMAIL ||
          "Portfolio <onboarding@resend.dev>",

        to: [
          process.env.RESEND_TO_EMAIL ||
          "renow381@gmail.com",
        ],

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

    if (error) {
      console.error(
        "RESEND ERROR:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    console.log(
      "EMAIL SENT:",
      data
    );

    return NextResponse.json({
      success: true,
      message: "Email berhasil dikirim.",
      id: data?.id,
    });

  } catch (error) {
    console.error(
      "SERVER ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server.",
      },
      { status: 500 }
    );
  }
}