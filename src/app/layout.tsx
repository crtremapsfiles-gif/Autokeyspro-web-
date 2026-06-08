import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Autokeys Remaps Pro | Electrónica avanzada del automóvil',
  description: 'Laboratorio de electrónica avanzada del automóvil en Puente de Génave, Jaén. Llaves, IMMO, ECU, Airbag, BMW, Mercedes, Audi y VAG.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
