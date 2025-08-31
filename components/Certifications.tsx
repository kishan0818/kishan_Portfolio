// 
"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    name: "Salesforce",
    logo: "/logos/salesforce-logo.png",
    url: "https://www.salesforce.com/trailblazer/bh0dlpruyh4zxix7n3",
    description: "Become an Agentblazer Champion (Certified Trailmix)",
  },
  {
    name: "Celonis",
    logo: "/logos/celonis-logo.jpg",
    url: "/certificates/celonis_certs.pdf",
    description: "Completed Celonis Academy Training with 3 skill badges",
  },
  {
    name: "AWS",
    logo: "/logos/aws-logo.png",
    url: "/certificates/aws_cert.pdf",
    description: "Building Language Models in AWS",
  },
  {
    name: "MongoDB",
    logo: "/logos/mongodb-logo.png",
    url: "/certificates/mdb_certs.pdf",
    description: "Completed MongoDB Basics for Students Training with 13 skill badges",
  },
  {
    name: "NPTEL",
    logo: "/logos/nptel-logo.png",
    url: "/certificates/nptel_cert.jpg",
    description: "Introduction to Industry 4.0 and Industrial Internet of Things",
  },
  {
    name: "IBM",
    logo: "/logos/ibm-logo.png",
    url: "/certificates/ibm_cert.pdf",
    description: "Web Development & Fundamentals",
  },
  {
    name: "Infosys",
    logo: "/logos/infosys-logo.png",
    url: "/certificates/infosys_certs.pdf",
    description: "Java , Database & SQL",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#00E0B8]">Certifications</span> & Training
          </h2>
          <div className="w-24 h-1 bg-[#00E0B8] mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and training programs
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="glassmorphic rounded-2xl p-6 text-center transition-all duration-300 teal-glow-hover group cursor-pointer"
            >
              {/* Logo without border */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={`${cert.name} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="font-heading text-lg font-semibold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{cert.description}</p>

              {/* View icon */}
              <div className="flex items-center justify-center text-[#00E0B8] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ExternalLink size={16} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphic rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Award size={32} className="text-[#00E0B8] mr-3" />
              <h3 className="font-heading text-2xl font-semibold text-[#00E0B8]">
                Commitment to Excellence
              </h3>
            </div>
            <p className="text-gray-300 text-lg">
              These certifications represent my dedication to staying current with industry standards and best
              practices. I believe in continuous learning and professional development to deliver the highest
              quality solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
