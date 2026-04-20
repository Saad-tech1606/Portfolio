import { motion } from "framer-motion";

const data = [
  {
    title: "Smart India Hackathon (Team Leader)",
    date: "2024 & 2025",
    desc: "Led team in solving real-world problems and managing project execution.",
    tag: "Leadership",
  },
  {
    title: "Accenture Data Analytics Simulation",
    date: "Dec 2024",
    desc: "Analyzed datasets and presented insights for business decisions.",
    tag: "Data Analytics",
  },
  {
    title: "Amazon Solutions Architecture Simulation",
    date: "Dec 2024",
    desc: "Designed scalable architecture for real-world systems.",
    tag: "Cloud",
  },
  {
    title: "Edunet Internship (LLM & Analytics)",
    date: "Sept 2025 – Oct 2025",
    desc: "Built ML-based analytics systems using Python and React.",
    tag: "Internship",
  },
  {
    title: "Research Publication",
    date: "April 2026",
    desc: "Published '5G ZORO – Zero Trust Framework' in IJFMR.",
    tag: "Research",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 text-white">

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
      >
        Journey
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">

        {/* 🔥 VERTICAL LINE */}
        <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded"></div>

        <div className="space-y-12">

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12"
            >


              {/* 🔥 CARD */}
              <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-[1.02] transition">

                <div className="bg-[#0B0F19]/90 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-lg">

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-purple-400 mt-1">
                    {item.date}
                  </p>

                  {/* 🔥 TAG */}
                  <span className="inline-block mt-2 text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>

                  <p className="text-gray-300 mt-3 text-sm">
                    {item.desc}
                  </p>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}