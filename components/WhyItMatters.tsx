"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const WhyItMatters = () => {
  return (
    <section id="why-it-matters" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why It Matters
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="Whyitmatters.jpg"
              alt=""
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl mb-6">
              AI bridges gaps in time, distance, and tech literacy to keep families connected.
            </p>
            <p className="text-lg">
              Our chatbot helps grandparents and grandchildren share stories, memories, and daily experiences, fostering
              stronger bonds across generations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyItMatters

