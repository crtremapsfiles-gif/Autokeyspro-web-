import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots { return { rules:{ userAgent:'*', allow:'/' }, sitemap:'https://autokeyspro.es/sitemap.xml' } }