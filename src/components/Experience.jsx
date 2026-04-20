import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const experienceData = [
  {
    title: "AI & Data Analytics Intern",
    org: "Edunet Foundation (AICTE VOIS Internship)",
    date: "Sep 2025 – Oct 2025",
    points: [
      "Developed ML-based solutions using Python on 10,000+ records",
      "Built preprocessing & feature engineering pipelines",
      "Conducted experiments to improve model performance",
      "Automated workflows and implemented data validation checks",
    ],
    certificate: "https://drive.google.com/file/d/1aq-vzXUJz2z_xr1c3aYcw6iBZsAjWR8j/view?usp=sharing",
    highlight: true,
  },
];

const simulationData = [
  {
    title: "Software Engineering Simulation",
    org: "JP Morgan Chase (Forage)",
    date: "Jan 2026",
    points: [
      "Built backend systems using Java, Spring Boot, REST APIs",
      "Implemented event-driven architecture using Apache Kafka",
    ],
    certificate: "https://drive.google.com/file/d/1cEx74vhATpLnM91SNJIWw3ST6c0F4PzK/view?usp=sharing",
  },
  {
    title: "Data Analytics Simulation",
    org: "Accenture (Forage)",
    date: "Dec 2024",
    points: [
      "Analyzed datasets to uncover business insights",
      "Performed data cleaning, validation, and visualization",
      "Presented findings for decision-making",
    ],
    certificate: "https://drive.google.com/file/d/1eIQa5-b23KsG2bGMY1hwc41rqxKfxYwS/view?usp=sharing",
  },
  {
    title: "Solutions Architecture Simulation",
    org: "Amazon (Forage)",
    date: "Dec 2024",
    points: [
      "Designed scalable cloud architecture solutions",
      "Analyzed system requirements and optimized performance",
      "Worked on real-world distributed system concepts",
    ],
    certificate:
      "https://drive.google.com/file/d/1spV8MPnb8lJqF9NAOr8iVwTuvjedsPHQ/view?usp=sharing",
  },
];

const Card = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    const midY = rect.top + rect.height / 2;

    x.set((e.clientX - midX) * 0.4);
    y.set((e.clientY - midY) * 0.4);
  }

  function handleMouseLeave() {
    animate(x, 0, { type: "spring", stiffness: 120 });
    animate(y, 0, { type: "spring", stiffness: 120 });
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.04 }}
      className={`relative p-[1px] rounded-2xl ${
        item.highlight
          ? "bg-gradient-to-r from-purple-500 to-pink-500"
          : "bg-gradient-to-r from-gray-700 to-gray-900"
      }`}
    >
      {/* INNER CARD */}
      <div className="bg-[#0B0F19]/90 backdrop-blur-xl p-6 rounded-2xl h-full border border-white/10 shadow-xl">

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-white">
          {item.title}
        </h3>

        <p className="text-sm text-purple-400 mt-1">{item.org}</p>
        <p className="text-xs text-gray-400 mt-1">{item.date}</p>

        {/* POINTS */}
        <ul className="mt-4 space-y-2">
          {item.points.map((point, i) => (
            <li key={i} className="text-gray-300 text-sm flex gap-2">
              <span className="text-purple-400">•</span> {point}
            </li>
          ))}
        </ul>

        {/* 🔥 CERTIFICATE BUTTON */}
        {item.certificate && (
          <a href={item.certificate} target="_blank" rel="noopener noreferrer">
            <button className="mt-6 text-sm px-4 py-2 rounded-lg 
            bg-gradient-to-r from-purple-500 to-pink-500 
            hover:scale-105 transition shadow-md">
              View Certificate
            </button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section className="py-24 px-6 text-white">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl text-center font-bold mb-20 
        bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      {/* EXPERIENCE */}
      <div className="max-w-6xl mx-auto mb-20">

        <h3 className="text-xl font-semibold mb-8 text-white border-l-4 border-purple-500 pl-4">
          Professional Experience
        </h3>

        <div className="space-y-8">
          {experienceData.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* SIMULATIONS */}
      <div className="max-w-6xl mx-auto">

        <h3 className="text-xl font-semibold mb-8 text-white border-l-4 border-purple-500 pl-4">
          Industry Simulations (Forage)
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simulationData.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

    </section>
  );
}