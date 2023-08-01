import "./globals.css";
import Head from "next/head";
export const metadata = {
  title: "Jegadeesh - Portfolio",
  description: "A showcase of my creative journey and professional work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
