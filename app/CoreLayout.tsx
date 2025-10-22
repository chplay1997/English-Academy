import Footer from './Footer'
import Navbar from './Navbar'
import HeaderBar from './HeaderBar'

export default function CoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBar />
      <main className="flex py-[66]">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  )
}
