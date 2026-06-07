import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autokeys Remaps Pro | Electrónica Avanzada del Automóvil",
  description:
    "Laboratorio de electrónica avanzada del automóvil en Puente de Génave, Jaén. Llaves, inmovilizadores, ECU, módulos, airbag y file service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
