export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-[#334155]
        bg-[#020617]
        text-[#E2E8F0]
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">

        {/* ================= CTA ================= */}
        <div className="max-w-3xl">

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#38BDF8]
            "
          >
            Mari bekerja sama
          </p>

          <h2
            className="
              mt-5
              max-w-2xl
              font-display
              text-4xl
              leading-[1.05]
              tracking-tight
              text-[#F1F5F9]
              sm:text-6xl
            "
          >
            Punya proyek yang ingin diwujudkan?
          </h2>

          <p
            className="
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-[#94A3B8]
            "
          >
            Saya terbuka untuk berdiskusi mengenai ide, desain,
            maupun proyek digital yang ingin kamu kembangkan.
          </p>

          {/* Tombol Kontak */}
          <a
            href="#kontak"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#38BDF8]
              bg-[#0F172A]
              px-6
              py-3
              text-sm
              font-medium
              text-[#E0F2FE]
              shadow-[0_8px_25px_rgba(56,189,248,0.12)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#818CF8]
              hover:bg-[#172554]
              hover:text-white
              hover:shadow-[0_12px_30px_rgba(129,140,248,0.25)]
            "
          >
            Mari mulai percakapan

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>

        </div>


        {/* ================= BOTTOM ================= */}
        <div
          className="
            mt-20
            border-t
            border-[#334155]
            pt-8
          "
        >

          {/* ================= COPYRIGHT ================= */}
          <div>
            <p className="text-sm text-[#94A3B8]">
              © {new Date().getFullYear()} Reno Wahyu
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              UI/UX & Graphic Designer
            </p>
          </div>


          {/* ================= SOCIAL MEDIA ================= */}
          <div
            className="
              mt-8
              grid
              w-full
              max-w-2xl
              grid-cols-1
              gap-6
              text-sm
              sm:grid-cols-2
              sm:gap-x-16
              sm:gap-y-2
            "
          >

            {/* ===== KOLOM KIRI ===== */}
            <div className="flex flex-col gap-2">

              {/* Email */}
              <a
                href="mailto:renow381@gmail.com"
                className="
                  text-[#94A3B8]
                  transition-colors
                  duration-300
                  hover:text-[#38BDF8]
                "
              >
                Email - renow381@gmail.com
              </a>

              {/* Telepon */}
              <a
                href="tel:+6283182312150"
                className="
                  text-[#94A3B8]
                  transition-colors
                  duration-300
                  hover:text-[#38BDF8]
                "
              >
                Telepon - +62 831-807-480
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/62831807480"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#94A3B8]
                  transition-colors
                  duration-300
                  hover:text-[#38BDF8]
                "
              >
                WhatsApp - +62 831-8231-2150
              </a>

            </div>


            {/* ===== KOLOM KANAN ===== */}
            <div className="flex flex-col gap-2">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/renowahyu_f/"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#94A3B8]
                  transition-colors
                  duration-300
                  hover:text-[#818CF8]
                "
              >
                Instagram - @renowahyu_f
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@zyvoria.airen"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#94A3B8]
                  transition-colors
                  duration-300
                  hover:text-[#818CF8]
                "
              >
                TikTok - @zyvoria.airen
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#94A3B8]
                  transition-colors
                  duration-300
                  hover:text-[#818CF8]
                "
              >
                YouTube - @whandrt
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
