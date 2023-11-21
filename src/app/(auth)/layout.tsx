import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <div>{children}</div>
      <div>Elemento comum</div>
    </html>
  )
}
