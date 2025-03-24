import "./globals.css";
import BootstrapProvider from "@/components/bootstrap/BootstrapProvider";
import {Header} from "@/components/header";

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
        <BootstrapProvider/>
      </body>
    </html>
  );
}
