import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Autokeys Remaps Pro | Electrónica avanzada del automóvil',
  description: 'Laboratorio especializado en llaves, inmovilizadores, ECU, módulos, airbag, BMW, Mercedes, Audi y VAG. Servicio nacional.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
