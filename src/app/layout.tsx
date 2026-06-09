import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Autokeys Remaps Pro | Electrónica avanzada del automóvil',
  description: 'Laboratorio especializado en llaves, inmovilizadores, ECUs, módulos electrónicos, airbag y diagnosis avanzada en Puente de Génave, Jaén.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
