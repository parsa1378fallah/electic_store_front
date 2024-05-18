import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/redux/Provider";
import { ReactQueryClientProvider } from "@/utils/ReactQueryClientProvider";
import Navbar from "./_components/navbar";
import ToastProvider from "@/utils/ToastProvider";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className="w-full flex flex-col">
          <Providers>
            <ToastProvider>
              <div>
                {" "}
                <Navbar />
                {children}
              </div>
            </ToastProvider>
          </Providers>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
