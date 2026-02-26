import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maxim Onufriev | English Language Expert',
  description: 'Premium English tutoring with focus on pronunciation and business communication. Personalized training programs for professionals.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
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
        <style>{`
          :root {
            --background: #F7F5F0;
            --foreground: #1C1C1A;
            --card: #EDEAE2;
            --card-foreground: #1C1C1A;
            --popover: #F7F5F0;
            --popover-foreground: #1C1C1A;
            --primary: #2D4A2D;
            --primary-foreground: #F0EDE5;
            --secondary: #EDEAE2;
            --secondary-foreground: #1C1C1A;
            --muted: #C5A55A;
            --muted-foreground: #6B6960;
            --accent: #C5A55A;
            --accent-foreground: #1A2E1A;
            --destructive: #C45C4A;
            --destructive-foreground: #F0EDE5;
            --border: #D5D0C6;
            --input: #F7F5F0;
            --ring: #2D4A2D;
            --radius: 0.75rem;
          }
          .dark {
            --background: #0A0A0A;
            --foreground: #FAFAFA;
            --card: #0A0A0A;
            --card-foreground: #FAFAFA;
            --popover: #0A0A0A;
            --popover-foreground: #FAFAFA;
            --primary: #F0EDE5;
            --primary-foreground: #1A2E1A;
            --secondary: #1A2E1A;
            --secondary-foreground: #F0EDE5;
            --muted: #6B6960;
            --muted-foreground: #A3A3A3;
            --accent: #C5A55A;
            --accent-foreground: #0A0A0A;
            --destructive: #C45C4A;
            --destructive-foreground: #F0EDE5;
            --border: #2A2A2A;
            --input: #0A0A0A;
            --ring: #C5A55A;
          }
          
          * {
            border-color: rgb(var(--border, 213 208 198));
          }
          
          body {
            background-color: var(--background);
            color: var(--foreground);
          }
          
          .text-balance {
            text-wrap: balance;
          }
          
          .text-pretty {
            text-wrap: pretty;
          }
          
          .blur-3xl {
            filter: blur(64px);
          }
          
          .animate-fade-in {
            animation: fadeIn 0.7s ease-out forwards;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 767px) {
            .parallax-bg {
              background-attachment: fixed;
              background-size: contain !important;
            }
          }
          
          @media (min-width: 768px) {
            .parallax-bg {
              background-attachment: fixed;
              background-size: cover !important;
            }
          }
        `}</style>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
