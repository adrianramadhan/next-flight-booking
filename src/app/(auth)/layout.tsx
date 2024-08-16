import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar";
import CompanyLogos from "../components/company-logos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flight - Website Booking Tickets",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white font-poppins bg-flysha-black`}
      >
        <section
          id="Signup"
          className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top -z-10 min-h-screen"
        >
          <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0 min-h-screen">
            <Navbar />
            <div className="flex flex-col justify-between min-h-[calc(100vh-78px)]">
              {children}
              <CompanyLogos />
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
