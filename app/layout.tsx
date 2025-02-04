import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import dynamic from "next/dynamic"
// import { Analytics } from "@vercel/analytics/react"

const Snow = dynamic(() => import("@/components/Snow"), { ssr: false })
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADDICT 2k25",
  description: "Innovate, Create, Dominate",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Snow />
        {children}
      </body>
    </html>
  )
}

