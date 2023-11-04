import Script from 'next/script';
import './globals.css'
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export const metadata = {
  title: 'Jery | Creative Design Studio',
  description: 'Jery is a Creative Design Studio, based in Bruges, where we are dedicated to crafting unique experiences. From strategy to branding.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics measurementId="G-ZC0LD13QFT" />
      <body>{children}</body>
    </html>
  )
};
