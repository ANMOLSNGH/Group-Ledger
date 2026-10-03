import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Group Ledger",
  description:
    "Real-time collaborative expense ledger for groups. Track shared expenses, split costs, and settle balances — together.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider
      appearance={{
        /*
         * Override Clerk's appearance using the Group Ledger design tokens.
         * We use the `dark` theme to ensure Clerk correctly handles
         * hover states, menu text, and contrast inside its components, while
         * overriding the primary colors with our semantic tokens.
         */
        theme: dark,
        variables: {
          colorBackground: "var(--bg-surface)",
          colorInput: "var(--bg-elevated)",
          colorPrimary: "var(--accent-primary)",
          colorForeground: "var(--text-primary)",
          colorMutedForeground: "var(--text-muted)",
          colorNeutral: "white",           // white (used for hover/borders in dark mode)
          borderRadius: "0.5rem",
          fontFamily: "var(--font-sans)",
        },
        elements: {
          userButtonPopoverCard: {
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-default)",
          },
          dividerLine: {
            backgroundColor: "var(--border-default)",
          },
        },
      }}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
