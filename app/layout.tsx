import "./globals.css";
import { GeistSans } from "geist/font/sans";
import SideBarLayout from "@/components/sidebar/sidebar-layout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextUIProvider } from "@nextui-org/react";
import Wrapper from "./Wrapper";

export const metadata = {
  title: "MyList",
  description: "Acompanhe sua lista de midias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <NextUIProvider>
          <main className="dark text-foreground bg-background"> 
            <AntdRegistry>
              <Wrapper>
                <SideBarLayout>{children}</SideBarLayout>
              </Wrapper>
            </AntdRegistry>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
