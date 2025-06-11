import "./globals.css";
import type { Metadata } from "next";
import { metadata as siteMetadata, companyInfo } from '@/content/siteContent'

export const metadata: Metadata = {
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  keywords: siteMetadata.home.keywords,
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  metadataBase: new URL('https://obodsoft.com'), // Update with actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://obodsoft.com',
    siteName: 'Obod Soft LTD',
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
