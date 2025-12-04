import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { SignInModal } from "@/components/modals/sign-in-modal"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card m-4 mx-auto max-w-7xl">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              <Link to="/">ADmyBRAND</Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 hover:gradient-text"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" onClick={() => setIsSignInOpen(true)}>
                Sign In
              </Button>
              <Link to="/dashboard">
                <Button variant="hero">Get Started</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-glass-border"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full" onClick={() => setIsSignInOpen(true)}>
                  Sign In
                </Button>
                <Link to="/dashboard" className="block">
                  <Button variant="hero" className="w-full">Get Started</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  )
}

export default Navigation
