import type { Metadata } from 'next'
import { Libre_Franklin } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Layout/Footer/footer';
import MenuClient from '@/components/Layout/Header/menuClient';

const franklin = Libre_Franklin({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WF Details',
  description: 'WF Details',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={franklin.className + " bg-slate-200å"}>
        <MenuClient/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
