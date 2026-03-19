import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/providers/PageTransition"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SteadyHands @ Bata Club",
  description:
    "SteadyHands Restaurant at Bata Club — premium dining, curated events, and unforgettable experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}