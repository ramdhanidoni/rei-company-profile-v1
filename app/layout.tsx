import "./globals.css"
import { El_Messiri, Poppins } from "next/font/google"
const el = El_Messiri({ subsets:["latin"], weight:["500","700"], variable:"--font-el" })
const pop = Poppins({ subsets:["latin"], weight:["400","500","600"], variable:"--font-pop" })
export const metadata = { title:"Raja Emas Indonesia", description:"107 cabang, XRF Lab, harga tertinggi" }
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="id" className={`${el.variable} ${pop.variable}`}><body className="font-[Poppins] antialiased">{children}</body></html>
}