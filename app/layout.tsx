import type { Metadata } from "next"
import { Cormorant_Garamond, Sora } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/providers/PageTransition"

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const bodyFont = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
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
        className={`${headingFont.variable} ${bodyFont.variable} bg-black text-white antialiased font-[family-name:var(--font-body)]`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}