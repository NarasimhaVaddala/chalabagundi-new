import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Header } from "@/Components/Header/Header";
import { FooterWrapper } from "@/Components/Footers/FooterWrapper";
import ReduxProvider from "@/Store/store/Provider";

export const metadata = {
  title: "Chalabagundi App",
  description:
    "Chalabagundi is a Cloud kitchen with varities of instant products and dishes",
};

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
