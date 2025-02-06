import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a
            href="https://nextjs-ai-chatbot-git-main-shreyas-s-joshis-projects.vercel.app"
            className="bg-primary-orange text-white text-xl py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 mb-4 md:mb-0"
          >
            Try Chatbot
          </a>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/contact-support" className="hover:underline">
              Contact Support
            </a>
            <a href="/faq" className="hover:underline">
              FAQ
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center mb-8">
          <Image src="/google-gemini-logo.svg" alt="Google Gemini Logo" width={100} height={40} className="mr-4" />
          <span className="text-lg font-semibold">Secure & Private</span>
        </div>
        <div className="text-center text-sm">
          <p>Featured in</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Image src="/media-logo-1.svg" alt="Media Logo 1" width={80} height={30} />
            <Image src="/media-logo-2.svg" alt="Media Logo 2" width={80} height={30} />
            <Image src="/media-logo-3.svg" alt="Media Logo 3" width={80} height={30} />
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 BridgeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

