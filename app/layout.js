import "./globals.css";

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
