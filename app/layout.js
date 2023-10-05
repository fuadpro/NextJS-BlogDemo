import { Inter } from 'next/font/google'

import styles from './styles.module.css';

import '../styles/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head'

// If loading a variable font, you don't need to specify the font weight
const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Next.js 13 | Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
       
      <body className={styles.container}>
        <Header />
        <main> 
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  )
}