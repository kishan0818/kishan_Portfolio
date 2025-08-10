"use client"

import { motion } from "framer-motion"
import { Code, Brain, Rocket, Heart } from "lucide-react"

export default function About() {
  const interests = [
    { icon: Code, label: "Coding", color: "#00E0B8" },
    { icon: Brain, label: "AI Research", color: "#00E0B8" },
    { icon: Rocket, label: "Innovation", color: "#00E0B8" },
    { icon: Heart, label: "Problem Solving", color: "#00E0B8" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-[#00E0B8]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#00E0B8] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glassmorphic rounded-2xl p-8 teal-glow-hover transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-[#00E0B8] font-semibold">Pre-final year IT student</span> at Sri Ramakrishna
              Engineering College (Class of 2027), specializing in AI, ML, and full-stack development.Over the past few years, 
              I've built AI-powered solutions in AI/ML + IoT Systems, Cybersecurity & Threat Detection, Healthcare AI & Optimization.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fueled by hackathons and innovation challenges, I’m passionate about transforming complex problems into 
              scalable, real-world solutions. I believe in building technology that not only works — but truly makes a 
              positive difference in society.
            </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-6 text-center">What Drives Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="glassmorphic rounded-xl p-6 text-center hover:border-[#00E0B8]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[#00E0B8]/20 flex items-center justify-center">
                    <interest.icon size={24} color={interest.color} />
                  </div>
                  <h4 className="font-semibold text-white">{interest.label}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphic rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold mb-4 text-[#00E0B8]">Current Focus</h3>
            <p className="text-gray-300 text-lg">
              I'm currently diving deep into AI/ML frameworks, exploring the latest advancements in neural networks and Currently pursuing
              my undergrad while jumping into hackathons and building innovative solutions just because it's fun. 
              Big fan of exploring new tech like AI/ML, automation and pretty much anything that grabs my attention.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
