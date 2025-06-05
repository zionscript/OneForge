import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons:{
    icon: [{url: "./logo.svg", type: "image/svg+xml"}]
  },
  title: `${'Home'} | DYGO CODE`,
  description: "Dialog Forge | Automatize seu atendimento com seu próprio bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Testar impacto na performance */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DP1QZK0H4H" />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-DP1QZK0H4H');
            `,
          }}
        />
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DP1QZK0H4H"></script>
    </html>
  );
}
