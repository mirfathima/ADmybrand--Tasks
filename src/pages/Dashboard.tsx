import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { MetricsCards } from "@/components/dashboard/metrics-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { ConversionsChart } from "@/components/dashboard/conversions-chart"
import { TrafficChart } from "@/components/dashboard/traffic-chart"
import { DataTable } from "@/components/dashboard/data-table"
import { ThemeToggle } from "@/components/dashboard/theme-toggle"
import { ExportButtons } from "@/components/dashboard/export-buttons"
import { DateRangePicker } from "@/components/dashboard/date-range-picker"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-40 glass-card m-0 rounded-none border-b border-glass-border px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Welcome back! Here's your overview.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <DateRangePicker />
                <ExportButtons />
                <ThemeToggle />
                <Link to="/">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Metrics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MetricsCards isLoading={isLoading} />
            </motion.div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <RevenueChart isLoading={isLoading} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ConversionsChart isLoading={isLoading} />
              </motion.div>
            </div>

            {/* Traffic Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TrafficChart isLoading={isLoading} />
            </motion.div>

            {/* Data Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <DataTable isLoading={isLoading} />
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard
