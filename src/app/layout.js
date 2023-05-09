import Navegacion from "@/components/Navegacion/page";
import "boxicons/css/boxicons.min.css";
import { Inter } from "next/font/google";
import "./gllobals.css";

const fuente = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fineducom | simulador de credito",
  description: "creado por Fineducom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fuente.className}>
        <Navegacion />
        {children}
      </body>
    </html>
  );
}
