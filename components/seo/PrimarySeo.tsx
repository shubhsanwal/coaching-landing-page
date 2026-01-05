'use client';

import React from 'react';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

const PrimarySeo: React.FC = () => {
  return (
    <Head>
      {generateNextSeo({
        title: "Best NEET JEE Coaching in Haldwani | Catalyst Institute - Top Ranks & Expert Guidance",
        description: "Achieve AIIMS, IIT success with personalized NEET/JEE coaching, mock tests, and 87%+ selection rates at Catalyst Institute Haldwani.",
        canonical: "https://catalystinstitute.in",
        additionalMetaTags: [
          {
            name: 'keywords',
            content:
              'NEET coaching Haldwani, JEE preparation, best coaching institute Uttarakhand, AIIMS coaching, IIT coaching, Haldwani coaching institute'
          }
        ],
        openGraph: {
          url: 'https://catalystinstitute.in',
          title: 'Best NEET JEE Coaching in Haldwani | Catalyst Institute - Top Ranks & Expert Guidance',
          description:
            'Achieve AIIMS, IIT success with personalized NEET/JEE coaching, mock tests, and 87%+ selection rates at Catalyst Institute Haldwani.',
          siteName: 'Catalyst Institute',
          type: 'website'
        },
        twitter: {
          cardType: 'summary_large_image',
          site: '@catalystinstitute',
          handle: '@catalystinstitute'
        }
      })}
    </Head>
  );
};

export default PrimarySeo;
