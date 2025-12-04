import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Skeleton } from "@/components/ui/skeleton"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

interface TrafficChartProps {
  isLoading: boolean
}

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--accent))",
  "hsl(var(--destructive))",
]

const generateData = () => [
  { name: "Direct", value: 400 + Math.floor(Math.random() * 100) },
  { name: "Social", value: 300 + Math.floor(Math.random() * 100) },
  { name: "Organic", value: 300 + Math.floor(Math.random() * 100) },
  { name: "Referral", value: 200 + Math.floor(Math.random() * 100) },
]

export function TrafficChart({ isLoading }: TrafficChartProps) {
  const [data, setData] = useState(generateData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData())
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  const total = data.reduce((sum, item) => sum + item.value, 0)

  if (isLoading) {
    return (
      <GlassCard className="p-6">
        <Skeleton className="h-6 w-32 mb-4" />
        <div className="grid lg:grid-cols-2 gap-6">
          <Skeleton className="h-[250px] w-full" />
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </div>
      </GlassCard>
    )
  }

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--popover-foreground))"
                }}
                formatter={(value: number) => [`${value} visits`, '']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between p-4 rounded-lg bg-glass/30">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="font-medium">{item.name}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold">{item.value.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">
                  {((item.value / total) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}
