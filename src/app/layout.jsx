import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata = {
  title: 'Ahmed Emara | Junior Software Engineer',
  description:
    'Personal portfolio of Ahmed Emara, a Junior Software Engineer specializing in full-stack web development.',
  icons: { icon: '/favicon.jpg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  )
}
