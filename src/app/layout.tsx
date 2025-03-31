import type React from "react"
import "./globals.css"
import {Inter} from "next/font/google"
import {ThemeProvider} from "next-themes"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "Your Name - Senior Software Engineer",
    description: "Personal portfolio and resume of a senior software engineer",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}

