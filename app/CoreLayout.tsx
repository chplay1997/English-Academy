import { GraduationCap, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'

export default function CoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex py-[66]">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  )
}
