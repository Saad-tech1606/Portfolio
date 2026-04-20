import { motion } from "framer-motion";

const certs = [
  {
    title: "Microsoft Azure AI-900",
    issuer: "Microsoft",
    link: "",
    tag: "Cloud & AI",
  },
  {
    title: "Machine Learning for Data Science",
    issuer: "IBM SkillsBuild",
    link: "https://drive.google.com/file/d/1-4yIhh6VGn1BGXrxoWPuc6WQt0s1uXIa/view?usp=sharing",
    tag: "Machine Learning",
  },
  {
    title: "AI Applications for Customer Service",
    issuer: "IBM SkillsBuild",
    link: "https://drive.google.com/file/d/17AidAcVFpEICc3vif3L0uk94a3uL5-Nn/view?usp=sharing",
    tag: "AI",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1UKmP8Rc5ngVyGy6R_6-61txFWxOgpasW/view?usp=sharing",
    tag: "Full Stack",
  },
  {
    title: "Adobe India Hackathon Participation",
    issuer: "Adobe",
    link: "https://drive.google.com/file/d/1AgXZ52XtvlBse4iNX7Sja5gHIpld1xdt/view?usp=sharing",
    tag: "Hackathon",
  },
  {
    title: "Tech-a-Thon 4.0 Participation",
    issuer: "BIT Mesra",
    link: "https://drive.google.com/file/d/1dUHiykfaIp_2wQh7NAwD8kfjA7RbVSDU/view?usp=sharing",
    tag: "Competition",
  },
  {
  title: "Artificial Intelligence Fundamentals",
  issuer: "IBM SkillsBuild",
  link: "https://drive.google.com/file/d/1jdMuPuSFGMIZfsizyoZ0bYA0JLpwp3u_/view?usp=sharing",
  image: "/certificates/ai-fundamentals.png",
  tag: "AI Certification",
},
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 text-white">

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
      >
        Certifications
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500"
          >
            {/* CARD */}
            <div className="bg-[#0B0F19]/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl h-full">

              {/* TITLE */}
              <h3 className="font-semibold text-lg text-white">
                {c.title}
              </h3>

              {/* ISSUER */}
              <p className="text-sm text-gray-400 mt-1">
                {c.issuer}
              </p>

              {/* 🔥 TAG */}
              {c.tag && (
                <span className="inline-block mt-3 text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                  {c.tag}
                </span>
              )}

              {/* BUTTON */}
              {c.link && (
                <a href={c.link} target="_blank">
                  <button className="mt-5 w-full bg-gradient-to-r from-purple-500 to-pink-500 py-2 rounded-lg shadow-md hover:scale-105 transition">
                    View Certificate
                  </button>
                </a>
              )}

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}