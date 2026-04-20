export default function Contact() {
  return (
    <section className="py-24 px-6 text-white">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="max-w-5xl mx-auto">

        {/* MESSAGE */}
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Feel free to reach out for Inetrnships, Job opportunities, and Hackathons.
          I'm always open to discussing innovative ideas and impactful projects.
        </p>

        {/* 🔥 HORIZONTAL GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* EMAIL */}
          <a
            href="mailto:saadalam3076@gmail.com"
            className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-purple-500/20 hover:scale-105 transition"
          >
            <img src="/icons/gmail.webp" alt="email" className="w-10 mb-3" />
            <span className="text-sm text-gray-300">Email</span>
            <span className="text-xs text-gray-400 mt-1">
              saadalam3076@gmail.com
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+919062301242"
            className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-purple-500/20 hover:scale-105 transition"
          >
            <img src="/icons/phone.webp" alt="phone" className="w-10 mb-3" />
            <span className="text-sm text-gray-300">Phone</span>
            <span className="text-xs text-gray-400 mt-1">
              +91 9062301242
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Saad-tech1606"
            target="_blank"
            className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-purple-500/20 hover:scale-105 transition"
          >
            <img src="/icons/github.png" alt="github" className="w-10 mb-3" />
            <span className="text-sm text-gray-300">GitHub</span>
            <span className="text-xs text-gray-400 mt-1">
              View Profile →
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/md-saad-alam-41a0bb256/"
            target="_blank"
            className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-blue-500/20 hover:scale-105 transition"
          >
            <img src="/icons/linkedin.jpeg" alt="linkedin" className="w-10 mb-3" />
            <span className="text-sm text-gray-300">LinkedIn</span>
            <span className="text-xs text-gray-400 mt-1">
              Connect →
            </span>
          </a>

          {/* LOCATION */}
          <div className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl border border-white/10">
            <img src="/icons/location.png" alt="location" className="w-10 mb-3" />
            <span className="text-sm text-gray-300">Location</span>
            <span className="text-xs text-gray-400 mt-1">
              Kolkata, India
            </span>
          </div>

        </div>

        {/* CTA BUTTON */}
        <a
          href="mailto:saadalam3076@gmail.com"
          className="block mt-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg hover:scale-105 transition max-w-xs mx-auto"
        >
          Send Message
        </a>

      </div>

    </section>
  );
}