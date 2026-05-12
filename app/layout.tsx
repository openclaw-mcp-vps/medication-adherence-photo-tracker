import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedTrack – Track Medication Compliance with Photos',
  description: 'Patients photograph daily pills, AI verifies correct medications and dosages, and sends adherence reports to doctors.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="816d4c92-403d-43ba-9527-876903406a08"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
