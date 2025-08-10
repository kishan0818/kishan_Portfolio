"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const achievements = [
  {
    title: "Human-Animal Conflict Hackathon",
    placement: "1st Place",
    prize: "₹25K",
    year: "2024",
    image: "/achievements/forest.jpg",
    description: "Won for developing the AI-driven Nocturnal Elephant Detection & Deterrence System - Sri Ramakrishna Engineering College, Coimbatore.",
  },
  {
    title: "Protovision - Technovate'25",
    placement: "1st Place",
    prize: "Winner",
    year: "2025",
    image: "/achievements/protovision.jpg",
    description: "Awarded for the AI Powered Cyber Triage System for Real-time threat Detection at Technovate'25 - Government College of Technology, Coimbatore.",
  },
  {
    title: "Innovators Icon Award - Hack24",
    placement: "Special Recognition",
    prize: "Icon Award",
    year: "2024",
    image: "/achievements/hack24.jpg",
    description: "Special recognition for innovative AI powered Lung Disease Prediction System at Kanam'25 - Dr.N.G.P College of Technology, Coimbatore.",
  },
  {
    title: "Pitch Perfect - Business Plan",
    placement: "3rd Place",
    prize: "Bronze",
    year: "2024",
    image: "/achievements/pperf.jpg",
    description: "Third place for business plan presentation on AI solutions for Medical Kits Management - Sri Ramakrishna Engineering College, Coimbatore.",
  },
  {
    title: "Paper Presentation - Youthzest'24",
    placement: "1st Place",
    prize: "Gold",
    year: "2024",
    image: "/achievements/youthzest.jpg",
    description: "First place for technical paper on Neuralink - Sri Ramakrishna Engineering College, Coimbatore.",
  },
  {
    title: "Poster Presentation - Ecocity Pitch",
    placement: "3rd Place",
    prize: "Bronze",
    year: "2024",
    image: "/achievements/ecocity.jpg",
    description: "Awarded for poster on Al-Powered Adaptive Traffic Management System - Revolutionizing Urban Mobility at Kumaraguru College of Technology, Coimbatore.",
  },
]

export default function Achievements() {
  const getPlacementColor = (placement: string) => {
    if (placement.includes("1st")) return "#FFD700"
    if (placement.includes("2nd")) return "#C0C0C0"
    if (placement.includes("3rd")) return "#CD7F32"
    return "#00E0B8"
  }

  return (
    <section id="achievements" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#00E0B8]">Achievements</span> & Awards
          </h2>
          <div className="w-24 h-1 bg-[#00E0B8] mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Recognition for innovation, problem-solving, and technical excellence
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphic rounded-2xl overflow-hidden hover:border-[#00E0B8]/50 transition-all duration-300 teal-glow-hover"
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-black mb-3"
                  style={{ backgroundColor: getPlacementColor(achievement.placement) }}
                >
                  {achievement.placement} • {achievement.prize} • {achievement.year}
                </span>

                <h3 className="font-heading text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
