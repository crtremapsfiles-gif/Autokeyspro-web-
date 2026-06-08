import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autokeys Remaps Pro | Electrónica avanzada del automóvil",
  description: "Llaves, inmovilizadores, ECU, módulos electrónicos, airbag crash data y servicio nacional por envío.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
