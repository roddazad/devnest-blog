import './globals.css'
import Navbar from '../../components/Navbar'

export const metadata = {
  title: 'DevNest Blog',
  description: 'Nurturing Developer Growth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}