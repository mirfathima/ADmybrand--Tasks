import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users,
  Lightbulb,
  TrendingUp
} from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Create compelling brand content with advanced AI that understands your voice and audience.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description: "Identify and reach your ideal customers with precision AI-powered audience analysis.",
      color: "text-secondary"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights into campaign performance with comprehensive AI-driven reporting.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Automated Optimization",
      description: "Let AI continuously optimize your campaigns for maximum ROI and engagement.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Monitor and protect your brand reputation across all digital channels 24/7.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Multi-Channel Management",
      description: "Manage all your brand touchpoints from a single, unified AI-powered platform.",
      color: "text-accent"
    },
    {
      icon: Lightbulb,
      title: "Creative Intelligence",
      description: "Generate innovative campaign ideas and creative concepts powered by AI insights.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Predictive Scaling",
      description: "Forecast trends and scale your brand strategy with predictive AI algorithms.",
      color: "text-secondary"
    }
  ]

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="gradient-text block">Modern Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, manage, and scale your brand with the power of AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard variant="feature" className="h-full">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection