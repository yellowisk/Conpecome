import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/components/theme-provider";
import { Roboto, Poppins, Anton } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conpecome",
  description: "Conpec's snack HQ",
};


const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700', '900'],
  variable: '--font-roboto'
});

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700', '900'],
  variable: '--font-poppins'
});
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="">
      <body 
        className={twMerge(inter.className, `${roboto_init.variable} ${poppins_init.variable}`)}>
          <ThemeProvider 
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>      
        </body> 
    </html>
  );
}
