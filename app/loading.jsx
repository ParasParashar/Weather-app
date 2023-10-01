'use client'

import { Loader2 } from "lucide-react"

const loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bgcolorDeatils w-full">
      <Loader2 className="h-32 w-32 animate-spin"/>
    </div>
  )
}

export default loader
