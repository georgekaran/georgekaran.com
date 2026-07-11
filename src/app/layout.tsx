import type React from "react"
import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import { PostHogProvider } from "@/analytics/PostHogProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata = {
  title: "George Karan — GeorgeOS",
  description:
    "George Karan, Software Engineer. A playful desktop-style portfolio: " +
    "React, TypeScript, Node, and a focus on accessibility and performance.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${inter.className}`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}
