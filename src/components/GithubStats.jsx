import { motion } from "framer-motion";

export default function GithubStats() {
  return (
    <section className="py-24 px-6 text-white">

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        GitHub
      </motion.h2>

      {/* 🔥 DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-400 max-w-2xl mx-auto text-center mb-12"
      >
        I focus on building real-world projects involving Machine Learning,
        Full Stack Development, and Data Analytics. My repositories showcase
        practical implementations including NLP models, scalable backend systems,
        and data-driven applications.
      </motion.p>

      {/* 🔥 MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500"
      >
        <div className="bg-[#0B0F19]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6 items-center">

            {/* LEFT SIDE */}
            <div className="flex flex-col gap-6 items-center">

              <img
                className="rounded-lg"
                src="https://github-readme-stats.vercel.app/api?username=Saad-tech1606&show_icons=true&theme=tokyonight"
              />

              <img
                className="rounded-lg"
                src="https://github-readme-streak-stats.herokuapp.com/?user=Saad-tech1606&theme=tokyonight"
              />

            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-6 items-center">

              <img
  src="https://github-readme-stats.vercel.app/api?username=Saad-tech1606&show_icons=true&theme=tokyonight&cache_seconds=1800"
/>

              {/* BUTTON */}
              <a href="https://github.com/Saad-tech1606" target="_blank">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition">
                  Visit GitHub Profile
                </button>
              </a>

              {/* TEXT */}
              <p className="text-sm text-gray-400 text-center max-w-xs">
                Explore repositories showcasing ML models, full-stack applications,
                and real-world problem solving.
              </p>

            </div>

          </div>

        </div>
      </motion.div>

    </section>
  );
}