// src/data/schema.ts
//
// schema.org JSON-LD builders. Everything is derived from siteConfig / carnival.ts so there is
// a single place to update contact details and event dates.

import { siteConfig } from './config';
import { carnival } from './carnival';
import type { CarnivalState } from './carnival';

const abs = (path: string) => new URL(path, siteConfig.siteUrl).toString();

export const ORG_ID = `${siteConfig.siteUrl}/#organization`;
export const SITE_ID = `${siteConfig.siteUrl}/#website`;

const address = {
  '@type': 'PostalAddress',
  streetAddress: '1 Center Road',
  addressLocality: 'Easton',
  addressRegion: 'CT',
  postalCode: '06612',
  addressCountry: 'US',
};

/** The fire company itself — emitted on every page. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FireStation',
    '@id': ORG_ID,
    name: siteConfig.companyName,
    alternateName: ['Easton Volunteer Fire Company', 'EVFC1', 'Easton Fire Department'],
    url: abs('/'),
    logo: abs('/logo.png'),
    image: abs('/logo.png'),
    description:
      'Career and volunteer firefighters protecting Easton, Connecticut since 1921, responding to fires, hazmat, flooding and other emergencies.',
    foundingDate: '1921',
    telephone: '+1-203-268-2833',
    email: siteConfig.Socials.Email,
    address,
    areaServed: { '@type': 'City', name: 'Easton', containedInPlace: { '@type': 'State', name: 'Connecticut' } },
    sameAs: [siteConfig.Socials.Facebook].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'non-emergency inquiries',
        telephone: '+1-203-268-2833',
        email: siteConfig.Socials.Email,
        areaServed: 'US-CT',
        availableLanguage: 'English',
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: abs('/'),
    name: siteConfig.companyName,
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/**
 * The annual carnival as a schema.org Event. Returns null while the dates are TBD, because
 * Google requires a startDate for Event rich results.
 */
export function carnivalEventSchema(state: CarnivalState, description: string, imageUrl?: string) {
  if (state.phase === 'tbd' || !carnival.start || !carnival.end) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `Easton Volunteer Fire Company Annual Carnival ${state.year}`,
    description,
    startDate: carnival.start,
    endDate: carnival.end,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: abs('/carnival/'),
    ...(imageUrl ? { image: [imageUrl] } : {}),
    location: {
      '@type': 'Place',
      name: siteConfig.companyName,
      address,
    },
    organizer: { '@id': ORG_ID },
  };
}
