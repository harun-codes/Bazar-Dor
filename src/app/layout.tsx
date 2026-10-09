import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

import Header from "@/components/Header";
import Navlinks from "@/components/NavLinks";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";


const bengaliFont = Noto_Sans_Bengali({
    subsets: ["bengali", "latin"],
    display: "swap",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "বাজার দর",
    description: "বাংলাদেশের দৈনিক বাজার দর",
};

interface Product {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down";
        pct: number;
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let products: Product[] = [];

    try {
        const res = await fetch(
            "https://api.api-store.workers.dev/api/bazardor/products",
            {
                next: {
                    revalidate: 60,
                },
            }
        );

        if (res.ok) {
            const response = await res.json();

            products = Array.isArray(response)
                ? response
                : response.data || [];
        }
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }

    return (
        <html
            lang="bn"
            suppressHydrationWarning
            data-theme="light"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className={bengaliFont.className}>

                <Header />
                <Navlinks />
                <Marquee products={products} />
                {children}
                <Footer />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{
                        duration: 3000,
                        style: {
                            fontSize: "14px",
                        }
                    }}
                />



            </body>
        </html>
    );
}