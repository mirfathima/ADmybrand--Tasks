import { motion } from "framer-motion"
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  ArrowUp,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const links = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "/api" },
      { name: "Integrations", href: "/integrations" },
      { name: "Documentation", href: "/docs" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" }
    ],
    resources: [
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Webinars", href: "/webinars" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
      { name: "Security", href: "/security" }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/admybrand", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/admybrand", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/admybrand", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@admybrand.com", label: "Email" }
  ]

  return (
    <footer className="relative py-20 px-4 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-2xl font-bold">
                <Sparkles className="w-8 h-8 text-primary" />
                <span className="gradient-text">ADmyBRAND</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Transform your marketing with AI-powered brand management, 
                content creation, and audience targeting that scales with your business.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:glow-primary transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest AI marketing insights and product updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg glass-card border border-glass-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-glass-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm mb-4 md:mb-0"
          >
            © 2025 ADmyBRAND. All rights reserved. Made with ❤️ for modern marketers.
          </motion.div>

          <Button 
            variant="glass" 
            size="sm" 
            onClick={scrollToTop}
            className="group"
          >
            Back to Top
            <ArrowUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer