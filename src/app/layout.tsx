import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Autokeys Remaps Pro | Electrónica avanzada del automóvil',
  description: 'Laboratorio de electrónica avanzada del automóvil en Puente de Génave, Jaén. Llaves, IMMO, ECU, módulos, airbag y servicio nacional.'
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
