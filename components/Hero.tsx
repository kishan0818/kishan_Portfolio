"use client"

import { motion } from "framer-motion"
import { Eye } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,224,184,0.1),transparent_50%)]" />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00E0B8] rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 lg:mb-6"
            >
              Hi, I'm <span className="text-[#00E0B8]">Jayakishan</span>{" "}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-3 lg:mb-6"
            >
              AI & Full-Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-400 mb-5 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I build intelligent systems that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-6 sm:px-8 py-3 bg-[#00E0B8] text-black font-semibold rounded-lg hover:bg-[#00c4a0] transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Eye size={20} />
                View Projects
              </motion.button>
              <motion.a
                href="/api/view-resume"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 border-2 border-[#00E0B8] text-[#00E0B8] font-semibold rounded-lg hover:bg-[#00E0B8] hover:text-black transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Eye size={20} />
                View Resume
              </motion.a> 
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-[#00E0B8] to-[#00a085] p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image
                      src="/jayakishan-profile.webp"
                      alt="Jayakishan B"
                      width={500}
                      height={400}
                      className="rounded-full object-cover w-full h-full 
                                object-[center_25%] 
                                scale-[1.]"
                      priority
                    />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}