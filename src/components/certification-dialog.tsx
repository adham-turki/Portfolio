"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Image from "next/image"

interface CertificationDialogProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title: string
}

export function CertificationDialog({ isOpen, onClose, imageSrc, title }: CertificationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full"
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={1000}
            height={600}
            className="w-full rounded-lg"
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

