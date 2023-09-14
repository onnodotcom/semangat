import ZHeader from "@/components/ZTopLeftBar";
import "./globals.css";
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
//import "devextreme/dist/css/dx.light.compact.css";
import "@/components/css/dx.generic.customgray-compact.css";
//import "@/components/css/dx.generic.customgreen-compact.css"

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"dx-viewport" /*inter.className*/}>
        <StyledComponentsRegistry>
          <div>{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
