import ThreeScene from "./ThreeScene";
import profile from "../assets/Md Saad Alam.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* Background glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-3xl opacity-30"></div>

      {/* 3D */}
      <ThreeScene />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Md Saad Alam
            </span>
          </h1>

          {/* 🔥 UPDATED ROLE */}
          <p className="mt-6 text-lg text-gray-300">
            Software Engineer | AI Engineer | Machine Learning Engineer | Full Stack Developer
          </p>

          <p className="mt-4 text-gray-400">
            Building intelligent systems using <span className="text-purple-400">AI</span>, 
            <span className="text-purple-400"> Machine Learning</span>, and scalable 
            <span className="text-purple-400"> full-stack architectures</span>.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 flex-wrap">

            <a href="#projects">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition">
                View Projects
              </button>
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-72 h-72 rounded-full object-cover border-4 border-purple-500 shadow-2xl hover:scale-105 transition"
          />
        </div>

      </div>

    </section>
  );
}