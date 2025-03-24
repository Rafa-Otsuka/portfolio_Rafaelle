import "./globals.css";
import BootstrapProvider from "@/components/bootstrap/BootstrapProvider";
import {Header} from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
        <BootstrapProvider/>
      </body>
    </html>
  );
}
