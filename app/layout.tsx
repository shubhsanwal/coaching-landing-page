import type { Metadata } from 'next';
import './globals.css';
import { Poppins, Roboto } from 'next/font/google';
import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://catalystinstitute.in'),
  title: 'Best NEET JEE Coaching in Haldwani | Catalyst Institute - Top Ranks & Expert Guidance',
  description:
    'Achieve AIIMS, IIT success with personalized NEET/JEE coaching, mock tests, and 87%+ selection rates at Catalyst Institute Haldwani.',
  keywords: [
    'NEET coaching Haldwani',
    'JEE preparation',
    'best coaching institute Uttarakhand',
    'AIIMS coaching',
    'IIT coaching',
    'Haldwani coaching institute'
  ],
  openGraph: {
    title: 'Best NEET JEE Coaching in Haldwani | Catalyst Institute',
    description:
      'Achieve AIIMS, IIT success with personalized NEET/JEE coaching, mock tests, and 87%+ selection rates at Catalyst Institute Haldwani.',
    url: 'https://catalystinstitute.in',
    siteName: 'Catalyst Institute',
    locale: 'en_IN',
    type: 'website'
  },
  alternates: {
    canonical: 'https://catalystinstitute.in'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best NEET JEE Coaching in Haldwani | Catalyst Institute',
    description:
      'Achieve AIIMS, IIT success with personalized NEET/JEE coaching, mock tests, and 87%+ selection rates at Catalyst Institute Haldwani.'
  }
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Catalyst Institute',
  url: 'https://catalystinstitute.in',
  logo: 'https://catalystinstitute.in/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near GBPUAT Entrance, Haldwani',
    addressLocality: 'Haldwani',
    addressRegion: 'Uttarakhand',
    postalCode: '263139',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9876543210',
    contactType: 'customer service'
  }
};

const coursesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Catalyst Institute Courses',
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: 'NEET-UG 2 Year Integrated Program',
      description:
        'Comprehensive NEET-UG preparation for Class 11-12 students with concept classes, DPPs, and full-length mock tests.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Catalyst Institute',
        sameAs: 'https://catalystinstitute.in'
      }
    },
    {
      '@type': 'Course',
      position: 2,
      name: 'JEE (Main + Advanced) 2 Year Program',
      description:
        'IIT-JEE focused 2-year classroom and hybrid program with advanced problem-solving and test analysis.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Catalyst Institute',
        sameAs: 'https://catalystinstitute.in'
      }
    },
    {
      '@type': 'Course',
      position: 3,
      name: 'GBPUAT / ICAR / Veterinary Sciences Entrance',
      description:
        'Dedicated batches for GBPUAT, ICAR, and Veterinary Science aspirants with targeted syllabus coverage and mock tests.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Catalyst Institute',
        sameAs: 'https://catalystinstitute.in'
      }
    },
    {
      '@type': 'Course',
      position: 4,
      name: 'School Integrated Program (Classes 9-12)',
      description:
        'Strong school academics foundation program aligned with CBSE/State Board curriculum for Classes 9 to 12.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Catalyst Institute',
        sameAs: 'https://catalystinstitute.in'
      }
    }
  ]
};

const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'EducationalOrganization',
    name: 'Catalyst Institute',
    url: 'https://catalystinstitute.in'
  },
  ratingValue: '4.8',
  reviewCount: '250',
  bestRating: '5',
  worstRating: '1'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
        />
      </head>
      <body className="bg-background text-dark antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
