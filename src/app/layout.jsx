import './globals.css'

export const metadata = {
  title: 'Jery | Creative Design Studio',
  description: 'Jery is a Creative Design Studio, based in Bruges, where we are dedicated to crafting unique experiences. From strategy to branding.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
};
