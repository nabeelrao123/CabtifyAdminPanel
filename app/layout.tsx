import { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import ClientProvider from "@/components/ClientProvide";
export const metadata: Metadata = {
  title: "The composer",
  description: "Your description here",
  keywords: "your, keywords, here",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (<>

    <html lang="en">
      <body>
        <ClientProvider>
          <ClientLayout>{children}</ClientLayout>
        </ClientProvider>
      </body>
    </html>
  </>)
}