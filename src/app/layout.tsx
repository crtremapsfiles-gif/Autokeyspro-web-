import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Autokeys Remaps Pro | Electrónica Avanzada del Automóvil',
  description: 'Laboratorio de electrónica avanzada del automóvil. Llaves, IMMO, ECU, módulos, airbag y servicio nacional para particulares y talleres.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
