import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Autokeys Remaps Pro | Electrónica Avanzada del Automóvil',
  description: 'Llaves, inmovilizadores, ECUs, módulos, airbag, BMW, Mercedes y servicio nacional desde Puente de Génave, Jaén.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
