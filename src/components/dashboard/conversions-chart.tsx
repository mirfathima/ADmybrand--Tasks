import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Skeleton } from "@/components/ui/skeleton"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface ConversionsChartProps {
  isLoading: boolean
}

const generateData = () => [
  { name: "Mon", conversions: 120 + Math.floor(Math.random() * 30), visitors: 450 + Math.floor(Math.random() * 50) },
  { name: "Tue", conversions: 150 + Math.floor(Math.random() * 30), visitors: 520 + Math.floor(Math.random() * 50) },
  { name: "Wed", conversions: 180 + Math.floor(Math.random() * 30), visitors: 610 + Math.floor(Math.random() * 50) },
  { name: "Thu", conversions: 140 + Math.floor(Math.random() * 30), visitors: 480 + Math.floor(Math.random() * 50) },
  { name: "Fri", conversions: 200 + Math.floor(Math.random() * 30), visitors: 680 + Math.floor(Math.random() * 50) },
  { name: "Sat", conversions: 90 + Math.floor(Math.random() * 30), visitors: 320 + Math.floor(Math.random() * 50) },
  { name: "Sun", conversions: 80 + Math.floor(Math.random() * 30), visitors: 290 + Math.floor(Math.random() * 50) },
]

export function ConversionsChart({ isLoading }: ConversionsChartProps) {
  const [data, setData] = useState(generateData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData())
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <GlassCard className="p-6">
        <Skeleton className="h-6 w-32 mb-4" />
        <Skeleton className="h-[300px] w-full" />
      </GlassCard>
    )
  }

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold mb-4">Weekly Conversions</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--popover-foreground))"
              }}
            />
            <Legend />
            <Bar 
              dataKey="conversions" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
              name="Conversions"
            />
            <Bar 
              dataKey="visitors" 
              fill="hsl(var(--secondary))" 
              radius={[4, 4, 0, 0]}
              name="Visitors"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}
