"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              className="mx-2"
            >
            </motion.div>
            <span className="text-gray-400">Made by</span>
            <span className="text-[#00E0B8] font-semibold ml-1">Jayakishan B</span>
          </div>

          <p className="text-gray-500 text-sm mb-4">© {new Date().getFullYear()} Jayakishan B. All rights reserved.</p>

          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
            <span>Built with Next.js 14</span>
            <span>•</span>
            <span>Styled with Tailwind CSS</span>
            <span>•</span>
            <span>Animated with Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
