"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type React from "react" // Added import for React

const VoiceMode = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section id="voice-mode" className="py-20 bg-secondary-cream">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Coming Soon: Voice Mode
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Talk Naturally, Feel Closer
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {!isSubmitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary-orange text-white text-lg py-2 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Notify Me
              </button>
            </>
          ) : (
            <p className="text-lg text-primary-blue">Thank you! We'll keep you updated.</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default VoiceMode

