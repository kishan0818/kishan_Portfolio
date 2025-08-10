"use client"

import { motion } from "framer-motion"
import { Code, Layers, Brain, Database, Cloud, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["C", "C++", "Java", "Python", "SQL", "JavaScript"],
    color: "#00E0B8",
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["Flutter", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "OpenCV"],
    color: "#00E0B8",
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["Machine Learning","YOLOv8", "CNNs", "TensorFlow", "Scikit-learn", "Random Forests"],
    color: "#00E0B8",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    color: "#00E0B8",
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["AWS", "Git/GitHub"],
    color: "#00E0B8",
  },
  {
    title: "Other",
    icon: GitBranch,
    skills: ["Prompt Engineering", "Vibe Coding"],
    color: "#00E0B8",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-[#00E0B8]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#00E0B8] mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A bunch of tools and tech I enjoy working with to build cool stuff.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              className="glassmorphic rounded-2xl p-6 hover:border-[#00E0B8]/50 transition-all duration-300 teal-glow-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#00E0B8]/20 flex items-center justify-center mr-4">
                  <category.icon size={24} color={category.color} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-800 text-[#00E0B8] text-sm rounded-full border border-[#00E0B8]/30 hover:bg-[#00E0B8]/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphic rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold mb-4 text-[#00E0B8]">Always Learning</h3>
            <p className="text-gray-300 text-lg">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies
              to stay at the forefront of AI and full-stack development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
