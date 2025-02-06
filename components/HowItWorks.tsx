"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
  { title: "Type a Question", description: "Ask anything, just like talking to a friend." },
  { title: "AI Understands Context", description: "Our AI comprehends the meaning behind your words." },
  { title: "Get a Caring Response", description: "Receive a thoughtful, personalized answer." },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="ani.gif"
            alt="Chatbot interface demo"
            width={800}
            height={450}
            className="mx-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks

