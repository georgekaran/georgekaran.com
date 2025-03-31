import type React from "react"
import "./globals.css"
import {Inter} from "next/font/google"
import {ThemeProvider} from "next-themes"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "George Karan - Senior Software Engineer",
    description: "A Software Engineer with 6+ years of experience in the SaaS industry with " +
        "strong fundamentals in React, TypeScript and Node.",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" className="dark" style={{colorScheme: "dark"}}>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

