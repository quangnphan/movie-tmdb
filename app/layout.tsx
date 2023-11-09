import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";
import { LoadingProvider } from "@/providers/loading-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Trailer App",
  description: "Movie Trailer Application Using Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LoadingProvider>
              {children}
            </LoadingProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
