import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import { Poppins, Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { LoaderProvider } from "@/context/LoaderContext";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
});

export const metadata: Metadata = {
  title: "Soulkadhi",
  description: "Delicious recipes, blogs, and videos from Soulkadhi",
  icons: {
    icon: "/favicon-new.ico",
    apple: "/favicon-new.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <LoaderProvider>
          <ClientWrapper>
            <Header />
            {children}
            <Footer />
          </ClientWrapper>
        </LoaderProvider>

      </body>
    </html>
  );
}
