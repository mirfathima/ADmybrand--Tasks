import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      avatar: "SC",
      rating: 5,
      content: "ADmyBRAND transformed our marketing strategy completely. Our engagement rates increased by 300% in just 3 months, and the AI insights are incredibly accurate."
    },
    {
      name: "Marcus Johnson",
      role: "CEO",
      company: "GrowthLab",
      avatar: "MJ",
      rating: 5,
      content: "The AI content generation is phenomenal. It understands our brand voice perfectly and creates content that resonates with our audience every time."
    },
    {
      name: "Elena Rodriguez",
      role: "Brand Manager",
      company: "InnovateCore",
      avatar: "ER",
      rating: 5,
      content: "We've saved 15+ hours per week on content creation while improving quality. The ROI has been outstanding - our campaigns are now 5x more effective."
    },
    {
      name: "David Kim",
      role: "CMO",
      company: "NextGen Solutions",
      avatar: "DK",
      rating: 5,
      content: "The predictive analytics helped us identify trends before our competitors. We've captured market opportunities that would have been impossible to spot manually."
    },
    {
      name: "Rachel Thompson",
      role: "Digital Marketing Lead",
      company: "ScaleUp Ventures",
      avatar: "RT",
      rating: 5,
      content: "ADmyBRAND's multi-channel management is a game-changer. Managing all our brand touchpoints from one platform has streamlined our entire workflow."
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Loved by Thousands of
            <span className="gradient-text block">Marketing Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why leading brands trust ADmyBRAND to transform their marketing strategy
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard variant="testimonial" className="p-8 lg:p-12 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
              
              <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              variant="glass" 
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="glass" 
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">10k+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500%</div>
            <div className="text-muted-foreground">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection