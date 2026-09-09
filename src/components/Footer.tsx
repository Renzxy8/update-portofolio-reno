export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-[#45455F]
        bg-[#323249]
        text-[#EEF2EB]
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
              text-[#9FA49A]
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
              text-[#F1F3EE]
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
              text-[#B8BCB4]
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
              border-[#62627A]
              bg-[#45455F]
              px-6
              py-3
              text-sm
              font-medium
              text-[#F4F6F1]
              shadow-[0_8px_25px_rgba(15,15,30,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#7C7C91]
              hover:bg-[#50506A]
              hover:shadow-[0_12px_30px_rgba(15,15,30,0.4)]
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
            border-[#45455F]
            pt-8
          "
        >

          {/* ================= COPYRIGHT ================= */}
          <div>
            <p className="text-sm text-[#B8BCB4]">
              © {new Date().getFullYear()} Reno Wahyu
            </p>

            <p className="mt-1 text-xs text-[#777B75]">
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
                  text-[#B8BCB4]
                  transition-colors
                  duration-300
                  hover:text-[#F4F6F1]
                "
              >
                Email - renow381@gmail.com
              </a>

              {/* Telepon */}
              <a
                href="tel:+6283182312150"
                className="
                  text-[#B8BCB4]
                  transition-colors
                  duration-300
                  hover:text-[#F4F6F1]
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
                  text-[#B8BCB4]
                  transition-colors
                  duration-300
                  hover:text-[#F4F6F1]
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
                  text-[#B8BCB4]
                  transition-colors
                  duration-300
                  hover:text-[#F4F6F1]
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
                  text-[#B8BCB4]
                  transition-colors
                  duration-300
                  hover:text-[#F4F6F1]
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
                  text-[#B8BCB4]
                  transition-colors
                  duration-300
                  hover:text-[#F4F6F1]
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