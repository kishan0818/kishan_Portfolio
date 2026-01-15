import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jayakishan B | Portfolio",
  description:
    "Portfolio of Jayakishan B, AI & Full-Stack Developer specializing in intelligent systems and real-world problem solving.",
  keywords: "AI Developer, Full-Stack Developer, Machine Learning, Next.js, React, Python",
  authors: [{ name: "Jayakishan B" }],
  openGraph: {
    title: "Jayakishan B - AI & Full-Stack Developer",
    description: "Portfolio showcasing AI and full-stack development projects",
    type: "website",
  },
  icons:{
    icon: "/favicon.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
