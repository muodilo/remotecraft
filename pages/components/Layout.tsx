import Navbar from "./Navbar";
import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '600'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${workSans.className} min-h-screen  text-black`}>
      <Navbar/>
      <main className="">{children}</main>
    </div>
  )
}
