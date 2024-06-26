import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <header className="flex justify-between p-5 font-poppins">
          <Image src="/image/logo.webp" alt="logo" width={180} height={40} />
          <div className="flex items-center gap-2">
            <button className="h-10 bg-[#0047BB] px-4 rounded hidden  md:block font-semibold">СОЗДАТЬ СЧЁТ</button>
            <button className="h-10 bg-[#0047BB] px-4 rounded hidden  md:block font-semibold">КОРЗИНА</button>
            <button className="flex gap-1 items-center border-solid border-[#363738] border rounded-2xl px-4 py-1.5">
              <Image src="/image/avatar.webp" alt="avatar" width={24} height={24} />
              <Image src="/image/arrow.webp" alt="arrow" width={14} height={8} />
            </button>
            <Image className="h-3 ml-2 cursor-pointer" src="/image/burgerMenu.webp" alt="Menu" width={18} height={12} />
          </div>
        </header>
        <main className="main px-5 ">
          {children}
        </main>
      </body>
    </html>
  );
}
