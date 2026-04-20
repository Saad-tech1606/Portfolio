import { motion } from "framer-motion";

const projects = [
  {
    title: "Multilingual Hate Speech Detection System",
    desc: "Fine-tuned XLM-RoBERTa on 30K+ dataset achieving 0.95 ROC-AUC using transformer-based NLP pipelines.",
    tech: ["Python", "PyTorch", "HuggingFace", "NLP"],
    github: "",
    demo: "",
    drive: "https://docs.google.com/presentation/d/1gJXYfDYWmbd9-b4NoUEU6K6I-9kwNU0r/edit",
    featured: true,
    tag: "Final Year Project",
  },

  {
    title: "Civic Issue Reporting Platform",
    desc: "Full-stack system handling 40K+ records with real-time updates, authentication, and dashboards.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Saad-tech1606/Civic_issue.git",
    demo: "https://civic-issue-eight.vercel.app/",
    drive: "",
    tag: "SIH 2025",
  },

  {
    title: "Harly England Real Estate Website",
    desc: "Luxury real estate website with modern UI/UX, animations, testimonials, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
    github: "https://github.com/Saad-tech1606/HARLY-ENGLAND.git",
    demo: "",
    drive: "",
    tag: "Freelance Project",
  },

  {
    title: "Smart Hospital Management System",
    desc: "Patient registration, doctor allocation, bed management, and digital blood bank system.",
    tech: ["React.js", "Node.js", "MySQL", "JavaScript"],
    github: "https://github.com/Saad-tech1606/Hospital-Management-System.git",
    demo: "",
    drive: "",
    tag: "SIH 2024",
  },

  {
    title: "Airbnb Booking Analysis",
    desc: "Analyzed NYC Airbnb dataset to uncover pricing trends and user insights.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Saad-tech1606/VOIS_AICTE_Oct2025_MdSaadAlam.git",
    demo: "",
    drive: "https://docs.google.com/presentation/d/14T86vYTu_Ll18b8Bbm9dT5fi55TCSZya/edit",
    tag: "AICTE Internship Project",
  },

  {
    title: "Netflix Content Analysis",
    desc: "Analyzed Movies vs TV Shows, genre trends, and global content distribution.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Saad-tech1606/VOIS_AICTE_Oct2025_MajorProject_MD-SAAD-ALAM.git",
    demo: "",
    drive: "https://drive.google.com/file/d/19i3xygGBr_cd--TS6M99L5nPKDt0lu9w/view",
    tag: "Internship Final Project",
  },

  // 🔥 NEW PROJECT ADDED
  {
    title: "Image Quality Detection & Enhancement System",
    desc: "Built a computer vision pipeline using OpenCV and Python for automated image quality detection and enhancement. Applied blur detection, noise reduction, contrast optimization, and CNN-based feature extraction using ResNet.",
    tech: ["Python", "OpenCV", "Computer Vision", "CNN", "ResNet"],
    github: "https://github.com/Saad-tech1606/image-quality-detection.git",
    demo: "",
    drive: "",
    tag: "Computer Vision Project",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-white">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-16 
      bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Projects
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`relative p-[1px] rounded-2xl ${
              project.featured
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : "bg-gray-800"
            }`}
          >
            {/* INNER CARD */}
            <div className="bg-[#0B0F19] p-6 rounded-2xl h-full border border-white/10 shadow-xl">

              {/* FEATURE BADGE */}
              {project.featured && (
                <span className="text-xs bg-purple-500 px-2 py-1 rounded">
                  Featured
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-xl font-semibold mt-2 text-white">
                {project.title}
              </h3>

              {/* TAG */}
              {project.tag && (
                <span className="inline-block mt-2 text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              )}

              {/* DESCRIPTION */}
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-2 py-1 rounded hover:bg-purple-500 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3 mt-6">

                {project.github && (
                  <a href={project.github} target="_blank">
                    <button className="text-sm border px-3 py-1 rounded hover:bg-purple-500 transition">
                      GitHub
                    </button>
                  </a>
                )}

                {project.demo && (
                  <a href={project.demo} target="_blank">
                    <button className="text-sm border px-3 py-1 rounded hover:bg-green-500 transition">
                      Live
                    </button>
                  </a>
                )}

                {project.drive && (
                  <a href={project.drive} target="_blank">
                    <button className="text-sm border px-3 py-1 rounded hover:bg-blue-500 transition">
                      Drive
                    </button>
                  </a>
                )}

              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}