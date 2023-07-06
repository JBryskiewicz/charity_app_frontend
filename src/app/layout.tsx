import '../styles/globals.scss'
import React from "react";
import {Providers} from "@/redux/provider";

export const metadata = {
  title: 'Oddam w dobre ręce',
  description: '...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body>
            <Providers>
                {children}
            </Providers>
        </body>
    </html>
  )
}
