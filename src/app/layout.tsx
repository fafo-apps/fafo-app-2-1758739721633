import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmashBite Burgers | Fresh, Fast, Smashed",
  description: "SmashBite serves crispy-edge smashburgers, shakes, and fries. Dine in, takeout, or call to order.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const PHONE = "555-123-4567";
const ADDRESS = "123 Main St, YourCity, ST";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>        
        <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight">
              <span className="text-red-600">Smash</span>Bite
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:opacity-80">Home</Link>
              <Link href="/menu" className="hover:opacity-80">Menu</Link>
              <Link href="/#hours" className="hover:opacity-80">Hours</Link>
              <a href={`tel:${PHONE}`} className="rounded-md bg-red-600 text-white px-3 py-1.5 hover:bg-red-700 transition">Order Now</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8 min-h-[calc(100vh-160px)]">
          {children}
        </main>
        <footer className="border-t border-black/5 dark:border-white/10 py-8">
          <div className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-3 text-sm">
            <div>
              <div className="font-semibold mb-2">SmashBite Burgers</div>
              <p>{ADDRESS}</p>
              <p className="mt-1">Call: <a className="underline hover:no-underline" href={`tel:${PHONE}`}>{PHONE}</a></p>
            </div>
            <div>
              <div className="font-semibold mb-2">Hours</div>
              <ul>
                <li>Mon–Thu: 11:00 AM – 9:00 PM</li>
                <li>Fri–Sat: 11:00 AM – 10:00 PM</li>
                <li>Sun: 12:00 PM – 8:00 PM</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Links</div>
              <ul className="space-y-1">
                <li><Link href="/menu" className="hover:underline">View Menu</Link></li>
                <li><Link href="/#hours" className="hover:underline">Directions & Hours</Link></li>
                <li><a href="https://maps.google.com/?q=123+Main+St+YourCity" target="_blank" rel="noreferrer" className="hover:underline">Open in Maps</a></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 mt-6 text-xs text-black/60 dark:text-white/60">© {new Date().getFullYear()} SmashBite. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
