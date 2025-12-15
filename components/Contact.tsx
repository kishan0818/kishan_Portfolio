"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Code, Send, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setStatusMessage("")

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Your Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Your Public Key
      )

      setStatusMessage("✅ Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Email send failed:", error)
      setStatusMessage("❌ Failed to send message. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jayakishan-balagopal-978613300/",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/kishan0818",
      color: "#333",
    },
    {
      name: "LeetCode",
      icon: Code,
      url: "https://leetcode.com/u/kishan0818/",
      color: "#FFA116",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:jayakishanb18@gmail.com",
      color: "#00E0B8",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-[#00E0B8]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#00E0B8] mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities in AI and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glassmorphic rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-white">Send a Email</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00E0B8] focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00E0B8] focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00E0B8] focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSending}
                  className={`w-full px-8 py-3 ${
                    isSending ? "bg-gray-500" : "bg-[#00E0B8] hover:bg-[#00c4a0]"
                  } text-black font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2`}
                >
                  <Send size={20} />
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>
                {statusMessage && (
                  <p className="text-sm mt-2 text-center text-gray-300">{statusMessage}</p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glassmorphic rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="text-[#00E0B8] mr-4" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="text-[#00E0B8] mr-4" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">jayakishanb18@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="text-[#00E0B8] mr-4" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+91 95858 20900</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphic rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-white">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
                  >
                    <link.icon size={24} className="text-[#00E0B8] mr-3" />
                    <div>
                      <p className="text-white font-medium group-hover:text-[#00E0B8] transition-colors">{link.name}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glassmorphic rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-[#00E0B8]">Let's Build Something Amazing</h3>
              <p className="text-gray-300">
                I'm always excited to work on innovative projects that make a real impact. Whether you have a startup
                idea, need AI solutions, or want to collaborate on open-source projects, I'd love to hear from you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
