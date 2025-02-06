"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NeedHelp = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-primary-blue text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        Need Help?
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg max-w-md w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">How can we help?</h2>
              <p className="mb-4">
                Our chatbot is designed to be easy to use. Just type your question or thought, and it will respond like
                a caring friend. If you need more assistance, please don't hesitate to contact our support team.
              </p>
              <button
                className="bg-primary-orange text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Got it, thanks!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NeedHelp

