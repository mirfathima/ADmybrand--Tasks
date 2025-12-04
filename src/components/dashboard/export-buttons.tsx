import { Button } from "@/components/ui/button"
import { Download, FileText, Table2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

export function ExportButtons() {
  const handleExportCSV = () => {
    // Mock CSV export
    const csvContent = `Name,Email,Status,Revenue,Date
John Smith,john@example.com,Active,12500,2024-01-15
Sarah Johnson,sarah@example.com,Active,8900,2024-01-14
Mike Wilson,mike@example.com,Inactive,5600,2024-01-13`
    
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "dashboard-data.csv"
    a.click()
    window.URL.revokeObjectURL(url)
    
    toast.success("CSV exported successfully!")
  }

  const handleExportPDF = () => {
    // Mock PDF export - in real app, use a library like jsPDF
    toast.success("PDF export initiated! (Demo mode)")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass">
        <DropdownMenuItem onClick={handleExportCSV} className="cursor-pointer">
          <Table2 className="w-4 h-4 mr-2" />
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleExportPDF} className="cursor-pointer">
          <FileText className="w-4 h-4 mr-2" />
          Export as PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
