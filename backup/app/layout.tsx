import "./globals.css";
import Header from "@/components/Layout/Header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Header />
          {children}
      </body>
    </html>
  );
}
