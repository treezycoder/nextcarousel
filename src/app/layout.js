import localFont from "next/font/local";
import "./globals.css";
import Nav from "./ui/navbar";
import Footer from "./ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next Carousel",
  description: "A simple and elegant carousel project built using Next.js.",
  icons: {
    icon: "/favicon.ico", // Main favicon
    shortcut: "/favicon-32x32.png", // Optional shortcut icon
    apple: "/apple-touch-icon.png", // Optional Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
