import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Product Demo</DialogTitle>
          <DialogDescription>
            See ADmyBRAND AI Suite in action
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {/* Video placeholder - in production, embed actual video */}
          <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center glow-primary">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <div>
                <p className="text-lg font-semibold">Demo Video</p>
                <p className="text-sm text-muted-foreground">
                  Click to play the product walkthrough
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-glass/30 text-center">
              <p className="text-2xl font-bold gradient-text">3 min</p>
              <p className="text-sm text-muted-foreground">Quick Overview</p>
            </div>
            <div className="p-4 rounded-lg bg-glass/30 text-center">
              <p className="text-2xl font-bold gradient-text">5 Features</p>
              <p className="text-sm text-muted-foreground">Covered</p>
            </div>
            <div className="p-4 rounded-lg bg-glass/30 text-center">
              <p className="text-2xl font-bold gradient-text">Live Demo</p>
              <p className="text-sm text-muted-foreground">Available</p>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button variant="hero" className="flex-1">
              Start Free Trial
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
