// Updated React component with image-free project section
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Business Website",
    desc: "Beautiful modern landing page for local businesses – restaurants, shops, salons with responsive design and SEO optimization.",
    github: "https://github.com/Masum2",
    live: "#",
    tags: ["React", "Tailwind", "Vercel", "Framer Motion"],
  },
  {
    title: "MERN Auth System",
    desc: "Enterprise-grade authentication system with JWT, refresh tokens, OTP reset, and admin role management.",
    github: "https://github.com/Masum2",
    live: "#",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Mini E-commerce",
    desc: "Full-featured e-commerce platform with product catalog, shopping cart, checkout system and admin dashboard.",
    github: "https://github.com/Masum2",
    live: "#",
    tags: ["React", "MongoDB", "Bkash", "Redux"],
  },
  {
    title: "Admin Dashboard",
    desc: "Comprehensive admin panel with real-time analytics, user management, activity tracking and data visualization.",
    github: "https://github.com/Masum2",
    live: "#",
    tags: ["React", "Recharts", "Node.js", "MongoDB"],
  },
  {
    title: "Chat Application",
    desc: "Real-time chat application with group chats, media sharing, typing indicators and online status.",
    github: "https://github.com/Masum2",
    live: "#",
    tags: ["Socket.io", "Node", "React", "MongoDB"],
  },
  {
    title: "Task Management",
    desc: "Productivity app with task organization, team collaboration, progress tracking and deadline management.",
    github: "https://github.com/Masum2",
    live: "#",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0c1222] text-gray-900">
      {/* STICKY HEADER */}
      <header className="w-full flex justify-center pt-6 sticky top-0 z-50 backdrop-blur-xl">
        <div className="w-[90%] md:w-[80%] bg-white/5 backdrop-blur-xl text-white flex items-center justify-between rounded-full px-8 py-4 shadow-xl border border-white/10">
          <div className="text-2xl font-bold tracking-wide">🌐</div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Home", "Projects", "About", "Services", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-sky-400 transition">
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 rounded-full text-sm font-semibold transition shadow">
            Contact Me
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="w-full mt-24 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[90%] md:w-[80%] grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT */}
          <div>
            <h1 className="text-sky-400 text-lg font-semibold">Md Masum Billah</h1>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-white leading-snug">
              Software Engineer <br /> Based In Bangladesh
            </h2>

            <p className="text-gray-300 mt-5 text-sm md:text-base leading-relaxed">
              MERN Stack Developer with 2.5+ years building scalable & modern apps. Clean code, smooth UI, and fast performance — guaranteed.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold transition shadow-md">
                Hire Me
              </button>
              <button className="px-6 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition">
                My Resume
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-80 rounded-3xl bg-gradient-to-b from-sky-600 to-sky-900 p-[3px] shadow-2xl">
              <div className="w-full h-full bg-[#0c1222] rounded-3xl overflow-hidden relative">
                <img src="my.png" alt="profile" className="w-full h-full object-cover" />

                <span className="absolute top-4 right-4 text-white text-xs bg-white/10 px-2 py-1 rounded">JS</span>
                <span className="absolute top-14 left-4 text-white text-xs bg-white/10 px-2 py-1 rounded">⚛️ React</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS + SERVICES */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <section id="services" className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white"
          >
            Skills & <span className="text-sky-400">Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {/* SKILLS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-[2px] rounded-2xl bg-gradient-to-b from-sky-600 to-sky-900 shadow-xl"
            >
              <div className="bg-[#0c1222] rounded-2xl p-6 h-full">
                <h3 className="text-xl font-semibold text-white mb-5 border-b border-white/10 pb-2">Skills</h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  {["React.js, Next.js", "Node.js, Express.js", "MongoDB, Mongoose", "Tailwind, HTML, CSS", "REST APIs, JWT Auth"].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="text-sky-400">▹</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* SERVICES */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-[2px] rounded-2xl bg-gradient-to-b from-sky-600 to-sky-900 shadow-xl md:col-span-2"
            >
              <div className="bg-[#0c1222] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-5 border-b border-white/10 pb-2">What I Provide</h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Business Website", "Portfolio Website", "MERN Applications", "E-commerce", "Admin Dashboard", "REST APIs", "Bug Fixing", "Deployment", "Performance Boost"].map((service) => (
                    <div key={service} className="bg-white/5 text-gray-200 p-3 rounded-xl border border-white/10 hover:border-sky-400 hover:bg-sky-500/10 transition cursor-pointer text-sm text-center">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS - UPDATED WITHOUT IMAGES */}
        <section id="projects" className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between"
          >
            <h3 className="text-3xl font-bold text-white">
              Featured <span className="text-sky-400">Projects</span>
            </h3>

            <a href="https://github.com/Masum2" target="_blank" rel="noreferrer" className="text-sm text-sky-400 hover:text-sky-300 transition">
              View on GitHub →
            </a>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="p-[2px] rounded-2xl bg-gradient-to-br from-sky-600/50 to-sky-900/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="bg-[#0c1222] rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
                    {/* Gradient Background Effect */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                    
               

                    {/* Project Title */}
                    <h4 className="text-xl font-semibold text-white mb-3 relative z-10">
                      {project.title}
                    </h4>

                    {/* Project Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1 relative z-10">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="mb-6 relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-sky-500/20 hover:border-sky-400/50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 relative z-10">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:bg-sky-500/10 hover:border-sky-400 hover:text-white transition-all text-sm font-medium"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition-all text-sm font-medium shadow-md hover:shadow-lg"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-24 grid md:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur shadow-xl hover:shadow-2xl transition-shadow"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl text-white font-semibold mb-3"
            >
              Get in touch
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm mb-4"
            >
              Email or call anytime — I reply within minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-300 space-y-2"
            >
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:smartcodebd43@gmail.com"
                  className="text-sky-400 hover:text-sky-300 transition"
                >
                  smartcodebd43@gmail.com
                </a>
              </div>
              <div>
                <strong>Phone:</strong>{" "}
                <a href="tel:+8801576707439" className="text-sky-400 hover:text-sky-300 transition">
                  +8801576707439
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <a
                href="mailto:smartcodebd43@gmail.com"
                className="px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-full transition shadow-md hover:shadow-lg"
              >
                Send Email
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur shadow-xl hover:shadow-2xl transition-shadow"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl text-white font-semibold mb-3"
            >
              Quick Proposal Form
            </motion.h3>

            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {["name", "phone", "project"].map((f, index) => (
                <motion.input
                  key={f}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  name={f}
                  placeholder={f.toUpperCase()}
                  className="p-3 bg-white/10 rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 transition"
                />
              ))}
              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                name="details"
                placeholder="PROJECT DETAILS"
                rows="4"
                className="p-3 bg-white/10 rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 transition"
              ></motion.textarea>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-full transition shadow-md hover:shadow-lg"
              >
                Send Request
              </motion.button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-xs text-gray-400 mt-3"
            >
              Or call directly: +8801576707439
            </motion.p>
          </motion.div>
        </section>
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Md Masum Billah — MERN Stack Developer
      </footer>
    </div>
  );
}