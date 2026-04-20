import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Projects" },
  { value: "2+", label: "Internships / Simulations" },
  { value: "1", label: "Research Publication" },
  { value: "AI & ML + SE", label: "Core Domains" },
];

export default function About() {
  return (
    <section className="relative py-28 px-6 text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 blur-3xl opacity-50" />

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-center font-bold mb-16 
        bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* 🔥 MAIN INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          I am a{" "}
          <span className="text-purple-400 font-semibold">
            Computer Science Engineering student
          </span>{" "}
          specializing in{" "}
          <span className="text-purple-400">Artificial Intelligence</span>,{" "}
          <span className="text-purple-400">Machine Learning</span>,{" "}
          <span className="text-purple-400">Data Science</span>, and{" "}
          <span className="text-purple-400">Full Stack Development</span>.
          <br /><br />
          I build scalable systems, work with real-world datasets, and develop{" "}
          <span className="text-purple-400">AI-driven solutions</span> that solve practical problems.
        </motion.p>

        {/* 🔥 SECOND TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-8 max-w-3xl mx-auto leading-relaxed"
        >
          My focus is on combining{" "}
          <span className="text-white font-medium">AI + Software Engineering</span>{" "}
          to build impactful applications. I actively participate in hackathons,
          internships, and simulations to strengthen real-world problem solving
          and system design skills.
        </motion.p>

        {/* 🔥 STATS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.08 }}
              className="relative p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"
            >
              {/* INNER CARD */}
              <div className="bg-[#0B0F19]/80 backdrop-blur-xl p-6 rounded-xl h-full border border-white/10 shadow-lg">

                <h3 className="text-2xl font-bold text-purple-400">
                  {s.value}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {s.label}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}