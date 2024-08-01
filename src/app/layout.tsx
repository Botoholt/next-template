import { ThemeChanger } from "@/components/theme-changer"
import { siteConfig } from "@/shared/constants/site-config"
import "@/shared/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon/icon.svg",
    apple: "/favicon/apple-icon.png",
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="h-dvh w-dvw bg-app-bg">
        <Providers>
          <header>
            <ThemeChanger />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
