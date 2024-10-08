import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const inter = Poppins({ subsets: ['latin'], weight:['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'John William',
  description: 'John William a Fullstack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
