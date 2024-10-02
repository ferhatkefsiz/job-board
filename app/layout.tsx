import type { Metadata } from "next"
import localFont from "next/font/local"

import { AuthKitProvider } from "@workos-inc/authkit-nextjs"

import Header from "@/modules/Header"
import Footer from "@/modules/Footer"

import { ThemeProvider } from "@/providers/theme-provider"
import { cn } from "@/utils/className"

import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: {
    default: "Job Board",
    template: `%s / Job Board`
  },
  description: "Find your next dream job"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistMono.variable,
          geistSans.variable,
          "flex flex-col antialiased min-h-screen font-sans bg-gray-50 dark:[--body-text-color:theme(colors.gray.300)] dark:bg-gray-950"
        )}
      >
        <AuthKitProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AuthKitProvider>
      </body>
    </html>
  )
}
