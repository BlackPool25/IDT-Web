"use client"

import { motion } from "framer-motion"

const benefits = [
  {
    title: "Instant Translation",
    description: "Communicate effortlessly across language barriers.",
    icon: "🌍",
  },
  {
    title: "Memory Sharing",
    description: "Preserve and share family stories and experiences.",
    icon: "📚",
  },
  {
    title: "24/7 Companionship",
    description: "Always available for a chat, reducing loneliness.",
    icon: "🤗",
  },
  {
    title: "Tech Simplification",
    description: "User-friendly interface for all tech levels.",
    icon: "💻",
  },
]

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary-cream">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Benefits
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits

