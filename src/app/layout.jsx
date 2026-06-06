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
    'Full Stack Developer skilled in React, Next.js, Django, and .NET, building scalable web applications, APIs, and responsive user experiences.Django, and .NET',
  icons: { icon: '/favicon.jpg' },
  verification: {
    google: "google-site-verification: googleec9732fc592ef360.html",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  )
}
