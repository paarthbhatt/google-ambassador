import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'PARTH BHATT FOR AMBASSADOR',
  description: 'Created with LOVE',
  generator: 'v0.dev',
  icons: {
    icon: 'https://www.google.com/favicon.ico',
    shortcut: 'https://www.google.com/favicon.ico',
    apple: 'https://www.google.com/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="https://www.google.com/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png" />
        <link rel="apple-touch-icon" href="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
