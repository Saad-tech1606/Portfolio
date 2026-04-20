import { motion } from "framer-motion";

export default function Research() {
  return (
    <section className="py-24 px-6 text-white">

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Research & Publication
      </motion.h2>

      <div className="max-w-5xl mx-auto">

        {/* 🔥 CARD */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500"
        >
          {/* INNER CARD */}
          <div className="bg-[#0B0F19]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">

            {/* TITLE */}
            <h3 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              5G ZORO — Zero Trust & Graded Decentralization Framework
            </h3>

            {/* SUBTEXT */}
            <p className="mt-4 text-purple-400">
              Published in International Journal for Multidisciplinary Research (IJFMR)
            </p>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
              Designed a secure distributed architecture using Zero Trust principles,
              focusing on scalability, decentralization, and system reliability.
            </p>

            {/* 🔥 BUTTONS */}
            <div className="flex gap-4 mt-8 flex-wrap">

              {/* MAIN CTA */}
              <a href="/research-paper.pdf" target="_blank">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition">
                  View Paper
                </button>
              </a>

              {/* SECONDARY */}
              <a href="https://doi.org/10.36948/ijfmr.2026.v08i02.72313" target="_blank">
                <button className="border border-purple-400 px-6 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition">
                  DOI
                </button>
              </a>

              <a href="https://www.ijfmr.com/research-paper.php?id=72313" target="_blank">
                <button className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-blue-500 transition">
                  Journal
                </button>
              </a>

            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}