import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  TrendingUp,
  FileText,
  Bell,
  HelpCircle
} from "lucide-react"
import { useLocation, Link } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Users", url: "/dashboard/users", icon: Users },
  { title: "Revenue", url: "/dashboard/revenue", icon: TrendingUp },
]

const secondaryItems = [
  { title: "Reports", url: "/dashboard/reports", icon: FileText },
  { title: "Notifications", url: "/dashboard/notifications", icon: Bell },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "Help", url: "/dashboard/help", icon: HelpCircle },
]

export function DashboardSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path || (path === "/dashboard" && currentPath === "/dashboard")

  return (
    <Sidebar className="border-r border-glass-border">
      <SidebarHeader className="p-4">
        <Link to="/" className="text-xl font-bold gradient-text">
          ADmyBRAND
        </Link>
        <p className="text-xs text-muted-foreground">AI Suite Dashboard</p>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={isActive(item.url) ? "bg-primary/10 text-primary" : ""}
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={isActive(item.url) ? "bg-primary/10 text-primary" : ""}
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-glass-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div className="text-sm">
            <p className="font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
