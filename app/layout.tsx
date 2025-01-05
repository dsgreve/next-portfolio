import type { Metadata } from "next";
import { Arvo, Lato} from '@next/font/google'
 
const arvo = Arvo({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arvo',
});
 

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})
 
import "./globals.css";


export const metadata: Metadata = {
  title: "Dale S. Greve | Web Developer",
  description: "Frontend focused web developer based in the Metro Detroit area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable}  ${arvo.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
