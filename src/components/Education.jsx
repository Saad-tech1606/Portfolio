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

        {/* 🎓 TMSL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500"
        >
          <div className="bg-[#0B0F19]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">

           <h3 className="text-xl md:text-2xl font-semibold text-white">
  Bachelor of Technology (B.Tech) – Computer Science & Engineering
</h3>

<p className="text-purple-400 mt-2 font-medium">
  Techno Main Salt Lake (TMSL), Kolkata
</p>

<p className="text-sm text-gray-400 mt-1">
  2022 – 2026 &nbsp; | &nbsp; CGPA: <span className="text-white font-semibold">7.43</span>
</p>

<p className="text-gray-300 mt-4 text-sm leading-7">
  Successfully completed a Bachelor's degree in Computer Science & Engineering
  with a strong foundation in <span className="text-white">Artificial Intelligence</span>,
  <span className="text-white"> Machine Learning</span>,
  <span className="text-white"> Natural Language Processing</span>,
  <span className="text-white"> Computer Vision</span>, and
  <span className="text-white"> Full-Stack Development</span>. Built multiple
  AI-powered applications, transformer-based NLP systems, REST APIs, and
  end-to-end software projects.
</p>

<p className="text-gray-400 mt-4 text-sm leading-7">
  <span className="text-white font-semibold">Relevant Coursework:</span>{" "}
  Data Structures & Algorithms, Database Management Systems (DBMS),
  Operating Systems, Software Engineering, Machine Learning,
  Artificial Intelligence, Image Processing,
  Computer Networks, Object-Oriented Programming (OOP).
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