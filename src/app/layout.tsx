// /app/layout.jsx
import { Inter } from "next/font/google";
import "./style/globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoaderWrapper from "./components/layout/LoaderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Yusuf Mohamed | Full Stack Developer",
  description: "My Digital Portfolio",
  icons: {
    icon: "/assets/image/logo512.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A1F44] text-[#E8E8E8]`}>
        <LoaderWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}
