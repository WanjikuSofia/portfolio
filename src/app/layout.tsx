/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "I'm Sofia and this is my portfolio.",
  // Open Graph metadata for social media
  openGraph: {
    images: [
      {
        url: "/image/meta.jpeg",  // The path to your image
        alt: "Meta Image for My Portfolio", // Optional description for the image
      },
    ],
  },
  // Twitter Card metadata for Twitter
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    title: "My Portfolio",
    description: " Hey there 👋 Welcome to my Portfolio! Am Sofia.",
    images: ["/image/meta.jpeg"], // Path to your image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="https://sofia-wanjiku.vercel.app/"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta property="og:image" content="/image/meta.png" />
        <meta name="twitter:image" content="/image/meta.png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
