"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "UTSAVA’26 – National Techno-Cultural Symposium Platform",
    description:
      "A full-scale production-grade platform built for a national-level techno-cultural symposium, supporting event listings, registrations, workshops, live schedules, and real-time UI interactions with a premium user experience.",
    image: "/projects/utsava.webp",
    tech: [
      "Next.js 15",
      "TypeScript",
      "React",
      "Tailwind CSS v4",
      "Framer Motion",
      "Supabase",
      "Vercel",
      "Responsive Design",
    ],
    github: "",
    demo: "https://srec-utsava.in",
    demoType: "live",
  },

  {
    title: "AI Powered ICU Patient Flow Coordinator",
    description:
      "AI-powered ICU bed allocation and patient triage system with predictive analytics and real-time dashboards. Built as a consultancy project for GE HealthCare to improve admission prioritization and operational efficiency.",
    image: "/projects/icu.webp",
    tech: [
      "Machine Learning",
      "Healthcare Analytics",
      "Logistic Regression",
      "FastAPI",
      "Python",
      "TypeScript",
      "Dashboard Systems",
    ],
    github: "",
    demo: "https://drive.google.com/file/d/1bHBdlFBayHi8kjnHhxljfZl0BYBfngbR/view?usp=sharing",
    demoType: "video",
  },

  {
    title: "AI-Driven Drug Discovery & Genomic Analysis Framework",
    description:
      "Explainable AI framework for drug–target interaction prediction and genomic variant analysis. Finalist at InnoHack’26, selected among top 21 teams from 900+ nationwide entries.",
    image: "/projects/hypoxia.webp",
    tech: [
      "Explainable AI",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "RAG",
      "Bioinformatics",
      "FastAPI",
    ],
    github: "",
    demo: "",
    demoType: null,
  },

  {
    title: "Explainable AI MLOps Framework for Fair Loan Advisory",
    description:
      "End-to-end MLOps framework for fair and inclusive loan advisory systems with bias mitigation, drift detection, and explainable predictions. Research paper accepted in IJARCS (2026).",
    image: "/projects/twxai.webp",
    tech: [
      "MLOps",
      "Fairness in AI",
      "XGBoost",
      "SHAP",
      "Drift Detection",
      "FastAPI",
      "Next.js",
    ],
    github: "",
    demo: "",
    demoType: null,
  },

  {
    title: "AI Driven Nocturnal Elephant Detection System",
    description:
      "YOLOv8-based nocturnal elephant detection system with adaptive deterrence, multilingual alerts, and real-time dashboards. 1st Prize winner at the Human–Animal Conflict Hackathon.",
    image: "/projects/fhc.webp",
    tech: [
      "YOLOv8",
      "Computer Vision",
      "OpenCV",
      "Raspberry Pi 4B",
      "IoT",
      "Twilio API",
      "Leaflet.js",
    ],
    github: "",
    demo: "https://drive.google.com/file/d/1oAiJpuySPdQQOKtwHGAlK4FZSOGzh0UK/view?usp=sharing",
    demoType: "video",
  },

  {
    title: "AI Powered Cyber Triage System",
    description:
      "Real-time DoS/DDoS detection and response platform using machine learning with automated IP blocking and attack analytics. 1st Prize at TECHNOVATE’25.",
    image: "/projects/ct.webp",
    tech: [
      "Cybersecurity",
      "Machine Learning",
      "Random Forest",
      "Flask",
      "Scapy",
      "Windows Firewall Automation",
    ],
    github: "https://github.com/kishan0818/CyberTriage",
    demo: "https://drive.google.com/file/d/14bu0BH5MRbKQDBY8Gf5YRzZbplJqbTRB/view?usp=sharing",
    demoType: "video",
  },

  {
    title: "SmartSEV – Smart Electric Vehicle Monitoring Platform",
    description:
      "IoT-based EV monitoring system for campus shuttle services with real-time tracking, battery and solar analytics, and alerting dashboards. MSME recognition applied.",
    image: "/projects/ssev.webp",
    tech: [
      "IoT",
      "MQTT",
      "Real-time Tracking",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/kishan0818/SmartSEV-SREC",
    demo: "https://smart-sev-srec.vercel.app/",
    demoType: "live",
  },

  {
    title: "TrackCrack – AI Railway Track Crack Detection",
    description:
      "Railway track crack detection system using acoustic signal analysis and CNN models on Raspberry Pi sensor data. Advanced to Smart India Hackathon nationals.",
    image: "/projects/ai-rail-inspection.webp",
    tech: [
      "Acoustic Signal Processing",
      "Deep Learning",
      "CNN",
      "TensorFlow/Keras",
      "OpenCV",
      "Raspberry Pi",
      "Android",
    ],
    github: "https://github.com/kishan0818/TrackCrack",
    demo: "",
    demoType: null,
  },
]

// Helper function to handle Google Drive direct links
const getDemoUrl = (url: string, type: string | null): string => {
  if (type === "video" && url.includes("drive.google.com")) {
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }
  return url;
};


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-[#00E0B8]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#00E0B8] mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Real-world solutions built with cutting-edge AI and full-stack technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              className="glassmorphic rounded-2xl overflow-hidden hover:border-[#00E0B8]/50 transition-all duration-300 teal-glow-hover"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-[#00E0B8] text-sm rounded-full border border-[#00E0B8]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  {/* Code Button */}
                  {project.github && project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}

                  {/* Demo Button */}
                  {project.demo && project.demo !== "#" && project.demoType && (
                    <motion.a
                      href={getDemoUrl(project.demo, project.demoType)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                        project.demoType === "video"
                          ? "bg-[#00E0B8] hover:bg-[#00c4a0] text-black"
                          : project.demoType === "live"
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-gray-600 text-white cursor-not-allowed"
                      }`}
                    >
                      <ExternalLink size={16} />
                      {project.demoType === "video" ? "Demo Video" : "Live Site"}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/kishan0818"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#00E0B8] text-[#00E0B8] font-semibold rounded-lg hover:bg-[#00E0B8] hover:text-black transition-all duration-200"
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
