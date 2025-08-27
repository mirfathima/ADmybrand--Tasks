import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, ArrowRight, Sparkles } from "lucide-react"
import heroDashboard from "@/assets/hero-dashboard.jpg"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Powered by Advanced AI Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <span className="gradient-text block">Brand with AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Revolutionize your marketing strategy with AI-powered brand management, 
              content creation, and audience targeting that scales with your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="hero" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="glass" className="group">
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">500%</div>
              <div className="text-sm text-muted-foreground">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card p-8 relative overflow-hidden animate-float">
            {/* Hero Image Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img 
                src={heroDashboard} 
                alt="AI Marketing Dashboard" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-card"></div>
            </div>
            
            {/* Animated background elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-4">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 glow-primary">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">AI-Powered Dashboard</h3>
                <p className="text-muted-foreground">
                  Real-time insights and automated optimization for your brand campaigns
                </p>
              </div>
              
              {/* Mock dashboard elements */}
              <div className="space-y-3 mt-8">
                <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg backdrop-blur-sm">
                  <span className="text-sm">Brand Engagement</span>
                  <span className="text-primary font-semibold">+127%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg backdrop-blur-sm">
                  <span className="text-sm">Content Performance</span>
                  <span className="text-secondary font-semibold">+89%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg backdrop-blur-sm">
                  <span className="text-sm">Audience Growth</span>
                  <span className="text-accent font-semibold">+156%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection