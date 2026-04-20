import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-24 px-6 text-white">

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
      >
        Education
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* 🎓 CIEM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500"
        >
          <div className="bg-[#0B0F19]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">

            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Bachelor of Technology – Computer Science Engineering
            </h3>

            <p className="text-purple-400 mt-2">
              Calcutta Institute of Engineering & Management (CIEM)
            </p>

            <p className="text-sm text-gray-400 mt-1">
              2022 – 2026 | CGPA: 7.5
            </p>

            <p className="text-gray-300 mt-4 text-sm">
              Strong focus on Data Structures, Algorithms, and Software Development.
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              <span className="text-white font-medium">Relevant Coursework:</span>{" "}
              Data Structures, DBMS, Operating Systems, Machine Learning, Image Processing
            </p>

          </div>
        </motion.div>

        {/* 🎓 SCHOOL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500"
        >
          <div className="bg-[#0B0F19]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">

            <h3 className="text-xl font-semibold text-white">
              ISC (12th)
            </h3>

            <p className="text-blue-400 mt-2">
              Saifee Golden Jubilee English Public School
            </p>

            <p className="text-sm text-gray-400 mt-1">
              85.5% | Strong performance in Computer Science & Mathematics
            </p>

          </div>
        </motion.div>

      </div>

    </section>
  );
}