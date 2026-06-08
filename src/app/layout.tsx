import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autokeys Remaps Pro | Electrónica Avanzada del Automóvil",
  description: "Laboratorio técnico especializado en llaves, inmovilizadores, ECU, módulos, BMW, Mercedes, VAG y servicio nacional por envío.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
