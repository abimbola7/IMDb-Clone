import './globals.css'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the imdb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}

          <Header />
          {/* Navbar */}
          <Navbar />

          {/* SearchBar */}
          {children}  
        </Providers>
      </body>
    </html>
  )
}
