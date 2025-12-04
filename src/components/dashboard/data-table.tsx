import { useState, useMemo } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronLeft, ChevronRight, Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"

interface DataTableProps {
  isLoading: boolean
}

type SortDirection = "asc" | "desc" | null

interface User {
  id: number
  name: string
  email: string
  status: string
  revenue: number
  date: string
}

const mockUsers: User[] = [
  { id: 1, name: "John Smith", email: "john@example.com", status: "Active", revenue: 12500, date: "2024-01-15" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", status: "Active", revenue: 8900, date: "2024-01-14" },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", status: "Inactive", revenue: 5600, date: "2024-01-13" },
  { id: 4, name: "Emily Brown", email: "emily@example.com", status: "Active", revenue: 15200, date: "2024-01-12" },
  { id: 5, name: "David Lee", email: "david@example.com", status: "Pending", revenue: 3400, date: "2024-01-11" },
  { id: 6, name: "Lisa Anderson", email: "lisa@example.com", status: "Active", revenue: 9800, date: "2024-01-10" },
  { id: 7, name: "James Taylor", email: "james@example.com", status: "Active", revenue: 11200, date: "2024-01-09" },
  { id: 8, name: "Jennifer Martinez", email: "jennifer@example.com", status: "Inactive", revenue: 4500, date: "2024-01-08" },
  { id: 9, name: "Robert Garcia", email: "robert@example.com", status: "Active", revenue: 18700, date: "2024-01-07" },
  { id: 10, name: "Michelle Davis", email: "michelle@example.com", status: "Pending", revenue: 6300, date: "2024-01-06" },
  { id: 11, name: "William Robinson", email: "william@example.com", status: "Active", revenue: 14100, date: "2024-01-05" },
  { id: 12, name: "Amanda Clark", email: "amanda@example.com", status: "Active", revenue: 7800, date: "2024-01-04" },
  { id: 13, name: "Christopher Lewis", email: "chris@example.com", status: "Inactive", revenue: 2900, date: "2024-01-03" },
  { id: 14, name: "Jessica Walker", email: "jessica@example.com", status: "Active", revenue: 16500, date: "2024-01-02" },
  { id: 15, name: "Daniel Hall", email: "daniel@example.com", status: "Active", revenue: 10400, date: "2024-01-01" },
]

export function DataTable({ isLoading }: DataTableProps) {
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState<keyof User | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  
  const itemsPerPage = 5

  const filteredAndSortedData = useMemo(() => {
    let result = [...mockUsers]

    // Filter by search
    if (search) {
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Filter by status
    if (statusFilter !== "all") {
      result = result.filter((user) => user.status === statusFilter)
    }

    // Sort
    if (sortColumn && sortDirection) {
      result.sort((a, b) => {
        const aVal = a[sortColumn]
        const bVal = b[sortColumn]
        
        if (typeof aVal === "string" && typeof bVal === "string") {
          return sortDirection === "asc" 
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal)
        }
        
        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortDirection === "asc" ? aVal - bVal : bVal - aVal
        }
        
        return 0
      })
    }

    return result
  }, [search, sortColumn, sortDirection, statusFilter])

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSort = (column: keyof User) => {
    if (sortColumn === column) {
      setSortDirection(prev => prev === "asc" ? "desc" : prev === "desc" ? null : "asc")
      if (sortDirection === "desc") setSortColumn(null)
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const SortIcon = ({ column }: { column: keyof User }) => {
    if (sortColumn !== column) return <ArrowUpDown className="w-4 h-4 ml-1" />
    if (sortDirection === "asc") return <ArrowUp className="w-4 h-4 ml-1" />
    if (sortDirection === "desc") return <ArrowDown className="w-4 h-4 ml-1" />
    return <ArrowUpDown className="w-4 h-4 ml-1" />
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/20 text-green-400"
      case "Inactive": return "bg-red-500/20 text-red-400"
      case "Pending": return "bg-yellow-500/20 text-yellow-400"
      default: return "bg-gray-500/20 text-gray-400"
    }
  }

  if (isLoading) {
    return (
      <GlassCard className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-10 w-32" />
          </div>
          <Skeleton className="h-[400px] w-full" />
        </div>
      </GlassCard>
    )
  }

  return (
    <GlassCard className="p-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="pl-10 w-full sm:w-64"
          />
        </div>
        
        <div className="flex gap-2">
          {["all", "Active", "Inactive", "Pending"].map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? "hero" : "outline"}
              size="sm"
              onClick={() => {
                setStatusFilter(status)
                setCurrentPage(1)
              }}
            >
              {status === "all" ? "All" : status}
            </Button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-glass-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center">
                  Name <SortIcon column="name" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort("email")}
              >
                <div className="flex items-center">
                  Email <SortIcon column="email" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center">
                  Status <SortIcon column="status" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort("revenue")}
              >
                <div className="flex items-center">
                  Revenue <SortIcon column="revenue" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center">
                  Date <SortIcon column="date" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((user) => (
              <TableRow key={user.id} className="hover:bg-glass/30">
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>${user.revenue.toLocaleString()}</TableCell>
                <TableCell>{user.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-muted-foreground">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of{" "}
          {filteredAndSortedData.length} results
        </p>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "hero" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </GlassCard>
  )
}
