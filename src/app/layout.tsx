import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://autokeyspro.es';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Autokeys Remaps Pro | Electrónica avanzada del automóvil',
    template: '%s | Autokeys Remaps Pro',
  },
  description:
    'Laboratorio especializado en llaves, inmovilizadores, ECUs, módulos electrónicos, airbag y diagnosis avanzada en Puente de Génave, Jaén. Servicio nacional para particulares y talleres.',
  keywords: [
    'llaves coche',
    'smart keys',
    'inmovilizador',
    'reparación ECU',
    'clonación módulos',
    'airbag crash data',
    'BMW CAS FEM BDC',
    'Mercedes EZS ELV',
    'diagnosis automóvil Jaén',
    'Autokeys Remaps Pro',
    'file service talleres',
  ],
  authors: [{ name: 'Autokeys Remaps Pro' }],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-180.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'Autokeys Remaps Pro',
    title: 'Autokeys Remaps Pro | Electrónica avanzada del automóvil',
    description:
      'Especialistas en llaves, inmovilizadores, ECUs, módulos electrónicos y airbag. Laboratorio en Puente de Génave, Jaén — servicio nacional por envío.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Autokeys Remaps Pro' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autokeys Remaps Pro | Electrónica avanzada del automóvil',
    description: 'Especialistas en llaves, inmovilizadores, ECUs, módulos electrónicos y airbag.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
