import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Anexa Soft",
  description:
    "Anexa soft provide ui/ux design, Frontend, Backend, Web development and mobile app development services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className}`}>{children}</body>
    </html>
  );
}
