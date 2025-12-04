import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Skeleton } from "@/components/ui/skeleton"
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Percent } from "lucide-react"
import { motion } from "framer-motion"

interface MetricsCardsProps {
  isLoading: boolean
}

const initialMetrics = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up" as const,
    icon: DollarSign,
    color: "primary"
  },
  {
    title: "Active Users",
    value: "8,234",
    change: "+8.2%",
    trend: "up" as const,
    icon: Users,
    color: "secondary"
  },
  {
    title: "Conversions",
    value: "1,429",
    change: "+23.1%",
    trend: "up" as const,
    icon: ShoppingCart,
    color: "accent"
  },
  {
    title: "Growth Rate",
    value: "34.2%",
    change: "-2.4%",
    trend: "down" as const,
    icon: Percent,
    color: "primary"
  }
]

export function MetricsCards({ isLoading }: MetricsCardsProps) {
  const [metrics, setMetrics] = useState(initialMetrics)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const randomChange = (Math.random() - 0.5) * 2
        const newValue = metric.title === "Total Revenue" 
          ? `$${(parseFloat(metric.value.replace(/[$,]/g, '')) + randomChange * 100).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
          : metric.title === "Active Users"
          ? (parseInt(metric.value.replace(/,/g, '')) + Math.floor(randomChange * 10)).toLocaleString()
          : metric.title === "Conversions"
          ? (parseInt(metric.value.replace(/,/g, '')) + Math.floor(randomChange * 5)).toLocaleString()
          : `${(parseFloat(metric.value) + randomChange * 0.1).toFixed(1)}%`
        
        return { ...metric, value: newValue }
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <GlassCard key={i} className="p-6">
            <div className="space-y-3">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>
          </GlassCard>
        ))}
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <GlassCard className="p-6 hover:glow-primary transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <p className="text-3xl font-bold">{metric.value}</p>
                <div className={`flex items-center gap-1 text-sm ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                  {metric.trend === "up" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{metric.change}</span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl bg-${metric.color}/20`}>
                <metric.icon className={`w-6 h-6 text-${metric.color}`} />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}
