"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary-cream to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connecting Generations, One Conversation at a Time
        </motion.h1>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            src="Banner.jpg"
            alt=""
            layout="responsive"
            width={1200}
            height={800}
            className="mx-auto object-cover"
          />
        </motion.div>
        <motion.a
          href="https://nextjs-ai-chatbot-git-main-shreyas-s-joshis-projects.vercel.app"
          className="inline-block bg-primary-orange text-white text-xl py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Chatbot
        </motion.a>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto text-primary-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
