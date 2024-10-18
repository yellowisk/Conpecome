import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/components/theme-provider";
import { Roboto, Poppins, Pixelify_Sans } from "next/font/google";

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

const pixel_init = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixelify-sans'
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={twMerge(inter.className, `${roboto_init.variable} ${poppins_init.variable} ${pixel_init.variable}`)}>
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
