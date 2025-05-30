import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast"
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })

export const metadata: Metadata = {
  title: "Financieel & Fiscaal Evenwicht",
  description: "Voor betrouwbare financiële en fiscale ondersteuning",
    icons: {
      icon: '/favicon.png', 
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ToastProvider> {/* 👈 HIER toevoegen */}

            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>

            <Toaster /> {/* dit staat al goed */}

          </ToastProvider> {/* 👈 sluiten */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
