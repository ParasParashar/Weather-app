import { useRouter } from 'next/navigation'
import {Loader2} from 'lucide-react'

const Loader = () => {
    const router = useRouter()
  return (
    <div className="flex w-full h-screen items-center justify-center">
    <div className="p-2 flex flex-col gap-5 item-center justify-center text-2xl">
      <div className="text-center flex items-center">
      <Loader2 className="animate-spin text-white"/>
      <span className="font-semibold text-2xl text-white">Loading...</span>
      </div>
      <button
        className="p-3 rounded-lg bg-slate-100/70 font-light hover:bg-slate-100/20 "
        onClick={() => router.push('/')}
      >
        Refresh
      </button>
    </div>
  </div>
  )
}

export default Loader
