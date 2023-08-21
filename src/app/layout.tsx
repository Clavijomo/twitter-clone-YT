import './globals.css' 

export const metadata = {
  title: 'Clone de Twitter',
  description: 'Generado moviendo las manos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
