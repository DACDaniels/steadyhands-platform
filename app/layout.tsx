import type { Metadata } from "next"
import { Cormorant_Garamond, Sora } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/providers/PageTransition"
import WhatsAppButton from "@/components/ui/WhatsAppButton"
import Navbar from "@/components/layout/Navbar"

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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "SteadyHands @ Bata Club",
    description:
      "Premium dining, curated events, and unforgettable experiences.",
    url: "https://steadyhandscatering.com",
    siteName: "SteadyHands",
    images: [
      {
        url: "https://steadyhandscatering.com/images/logo4.png",
        width: 1200,
        height: 630,
        alt: "SteadyHands Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SteadyHands @ Bata Club",
    description:
      "Premium dining, curated events, and unforgettable experiences.",
    images: ["https://steadyhandscatering.com/images/logo4.png"],
  },
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
          <Navbar />
          {children}
        </PageTransition>

        {/* ✅ FLOATING WHATSAPP BUTTON */}
        <WhatsAppButton />
      </body>
    </html>
  )
}