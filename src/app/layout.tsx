import type { Metadata } from 'next'
import './../styles/globals.css'

export const metadata: Metadata = {
  title: 'Villa Nova',
  creator: 'Mateus Villa Nova',
  description: 'Portfolio made by Mateus Villa Nova',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-full h-dvh bg-[#121212] text-[#9ca3af] text-agrandir antialiased">
        {children}
      </body>
    </html>
  )
}
