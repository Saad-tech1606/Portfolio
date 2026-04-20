import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["Java", "Python"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js"],
  },
  {
    title: "Software Engineering", // 🔥 ADDED PROPERLY
    icon: "⚙️",
    skills: [
      "SDLC",
      "OOP",
      "REST API Design",
      "System Design (Basics)",
      "Debugging & Testing",
      "Agile",
      "Version Control (Git)"
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: "🤖",
    skills: [
      "NLP",
      "Deep Learning",
      "Transformers",
      "XLM-RoBERTa",
      "BERT",
      "CNN"
    ],
  },
  {
    title: "Database & Data Engineering",
    icon: "🗄️",
    skills: [
      "MySQL",
      "MongoDB",
      "Data Cleaning",
      "Data Preprocessing",
      "Feature Engineering"
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Kafka",
      "HuggingFace",
      "PyTorch"
    ],
  },
  {
    title: "Soft Skills",
    icon: "🧠",
    skills: [
      "Problem Solving",
      "Leadership",
      "Team Collaboration",
      "Communication",
      "Critical Thinking",
      "Time Management"
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 text-center">

      {/* 🔥 TITLE ANIMATION */}
      <motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-5xl md:text-6xl font-extrabold mb-14 
  bg-gradient-to-r from-purple-400 to-pink-500 
  bg-clip-text text-transparent tracking-wide"
>
  Skills
</motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"
          >
            {/* CARD */}
            <div className="bg-[#0B0F19] p-6 rounded-xl h-full">

              {/* HEADER */}
              <h3 className="text-lg font-semibold mb-4 text-purple-400 flex items-center justify-center gap-2">
                <span className="text-xl">{group.icon}</span>
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((s, j) => (
                  <span
                    key={j}
                    className="text-sm bg-gray-800 px-3 py-1 rounded-full hover:bg-purple-500 hover:scale-105 transition duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}