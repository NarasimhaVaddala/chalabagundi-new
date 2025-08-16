import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Header } from "@/Components/Header/Header";
import { FooterWrapper } from "@/Components/Footers/FooterWrapper";
import ReduxProvider from "@/Store/store/Provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Chalabagundi App",
  description:
    "Chalabagundi is a Cloud kitchen with varities of instant products and dishes",
};
// ${geistSans.variable} ${geistMono.variable}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ToastContainer />
        <ReduxProvider>
          <Header />
          {children}
          <FooterWrapper />
        </ReduxProvider>
      </body>
    </html>
  );
}
