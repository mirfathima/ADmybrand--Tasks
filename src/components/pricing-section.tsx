import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Check, Star, Crown, Rocket } from "lucide-react"

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started with AI marketing",
      icon: Star,
      popular: false,
      features: [
        "AI Content Generation (100/month)",
        "Basic Analytics Dashboard",
        "2 Brand Profiles",
        "Email Support",
        "Standard Templates",
        "Social Media Integration"
      ]
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses that need advanced AI capabilities",
      icon: Crown,
      popular: true,
      features: [
        "AI Content Generation (Unlimited)",
        "Advanced Analytics & Insights",
        "10 Brand Profiles",
        "Priority Support",
        "Custom Templates",
        "Multi-Channel Management",
        "A/B Testing Suite",
        "Brand Protection Monitoring",
        "API Access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex brand management needs",
      icon: Rocket,
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited Brand Profiles",
        "Dedicated Account Manager",
        "Custom AI Model Training",
        "White-label Solutions",
        "Advanced Security & Compliance",
        "Custom Integrations",
        "On-premise Deployment",
        "SLA Guarantee"
      ]
    }
  ]

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="gradient-text block">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your brand's growth. All plans include our core AI features.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <GlassCard 
                variant="pricing" 
                className={`h-full ${plan.popular ? 'ring-2 ring-primary glow-primary' : ''}`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 ${plan.popular ? 'glow-primary' : ''}`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ 99.9% Uptime SLA</span>
            <span>✓ SOC 2 Compliant</span>
            <span>✓ GDPR Ready</span>
            <span>✓ 24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection