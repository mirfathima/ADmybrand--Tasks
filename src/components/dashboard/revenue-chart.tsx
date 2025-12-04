import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Skeleton } from "@/components/ui/skeleton"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface RevenueChartProps {
  isLoading: boolean
}

const generateData = () => [
  { name: "Jan", revenue: 4000 + Math.random() * 500, target: 4500 },
  { name: "Feb", revenue: 3000 + Math.random() * 500, target: 3800 },
  { name: "Mar", revenue: 5000 + Math.random() * 500, target: 5200 },
  { name: "Apr", revenue: 2780 + Math.random() * 500, target: 3000 },
  { name: "May", revenue: 1890 + Math.random() * 500, target: 2500 },
  { name: "Jun", revenue: 2390 + Math.random() * 500, target: 3100 },
  { name: "Jul", revenue: 3490 + Math.random() * 500, target: 4000 },
  { name: "Aug", revenue: 4200 + Math.random() * 500, target: 4800 },
  { name: "Sep", revenue: 5100 + Math.random() * 500, target: 5500 },
  { name: "Oct", revenue: 4800 + Math.random() * 500, target: 5200 },
  { name: "Nov", revenue: 5500 + Math.random() * 500, target: 6000 },
  { name: "Dec", revenue: 6200 + Math.random() * 500, target: 6500 },
]

export function RevenueChart({ isLoading }: RevenueChartProps) {
  const [data, setData] = useState(generateData())

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData())
    }, 10000)
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
      <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--popover-foreground))"
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
              activeDot={{ r: 8, fill: "hsl(var(--primary))" }}
              name="Revenue"
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="hsl(var(--secondary))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Target"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}
