import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const FAQSection = () => {
  const faqs = [
    {
      question: "How does ADmyBRAND's AI technology work?",
      answer: "Our AI leverages advanced machine learning algorithms and natural language processing to analyze your brand data, audience preferences, and market trends. It then generates personalized content, optimizes campaigns, and provides actionable insights to improve your marketing performance."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing tools?",
      answer: "Yes! ADmyBRAND integrates seamlessly with popular marketing platforms including HubSpot, Salesforce, Google Analytics, Facebook Ads, LinkedIn, Twitter, and many more. Our API also allows for custom integrations with your existing tech stack."
    },
    {
      question: "How accurate is the AI content generation?",
      answer: "Our AI content generation has a 95% accuracy rate for brand voice consistency and generates content that requires minimal editing. The system learns from your feedback and improves over time, ensuring increasingly better results for your specific brand."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support via chat, email, and phone. Professional and Enterprise plans include dedicated account managers, priority support, and custom onboarding. We also provide extensive documentation, video tutorials, and webinar training sessions."
    },
    {
      question: "Is my data secure with ADmyBRAND?",
      answer: "Absolutely. We're SOC 2 compliant and GDPR ready. All data is encrypted in transit and at rest, we never share your data with third parties, and you maintain full ownership of your content and insights. We undergo regular security audits and penetration testing."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no penalties. Your account will remain active until the end of your current billing period. We also offer a 14-day free trial so you can test all features before committing."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most customers see improvements in engagement rates within the first week. Significant ROI improvements typically occur within 30-60 days as the AI learns your audience and optimizes campaigns. Full optimization usually happens within 90 days."
    },
    {
      question: "Do you offer custom AI model training?",
      answer: "Yes, our Enterprise plan includes custom AI model training specifically for your brand, industry, and audience. This provides even more accurate content generation and insights tailored to your unique business needs and objectives."
    }
  ]

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about ADmyBRAND and how it works
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-glass-border bg-gradient-card rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@admybrand.com" 
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Email Support
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a 
              href="/contact" 
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Schedule a Demo
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a 
              href="/help" 
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Help Center
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection