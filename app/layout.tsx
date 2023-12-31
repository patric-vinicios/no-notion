import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "No-Notion",
  description: "No-notion workspace for big ideias.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-black.svg",
        href: "/logo-black.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-white.svg",
        href: "/logo-white.svg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="nonotion-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
