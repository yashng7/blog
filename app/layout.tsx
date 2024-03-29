import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
// import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../public/images/assets/logo.webp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-6xl px-10 py-10 mx-auto">
            <header>
              <div className="flex items-center justify-between">
                <Link href="/">
                  <Image src={logo} alt="logo" className="w-10 rounded-[50%]" />
                </Link>
                <nav className="flex items-center ml-auto space-x-6 text-sm font-medium">
                  <Button variant="link" className="p-0 m-0">
                    <Link href="/posts">Blogs</Link>
                  </Button>
                  <Button variant="link" className="p-0 m-0">
                    <Link href="/about">About</Link>
                  </Button>
                  <ModeToggle />
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
