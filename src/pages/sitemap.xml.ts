import type { APIRoute } from 'astro';
import { services, guides } from '../data/site';

const BASE = 'https://www.dachgeschossausbaukoeln.de';
const paths = [
  '/', '/leistungen/', ...services.map(service => `/leistungen/${service.slug}/`),
  '/ratgeber/', ...guides.map(guide => `/ratgeber/${guide.slug}/`),
  '/stadtteile/', '/kontakt/', '/impressum/', '/datenschutz/'
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${BASE}${path}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
