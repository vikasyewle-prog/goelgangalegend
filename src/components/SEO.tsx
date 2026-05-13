import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  faq?: { question: string; answer: string }[];
}

export default function SEO({ title, description, keywords, canonical, image, faq }: SEOProps) {
  const siteUrl = 'https://goelgangalegend.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImage = image || `${siteUrl}/hero-aerial.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": siteUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": title,
              "item": fullCanonical
            }
          ]
        })}
      </script>

      {/* Google Product & Offer Schema for Configurations */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "3 BHK Luxe Apartment - Goel Ganga Legend County",
          "image": [`${siteUrl}/floorplan-3bhk.png`],
          "description": "Premium 3 BHK Luxe residence in Bavdhan, Pune. 1124 Sq.Ft. usable carpet area with sports views.",
          "sku": "GGLC-3BHK-LUXE",
          "brand": {
            "@type": "Brand",
            "name": "Goel Ganga Developments"
          },
          "offers": {
            "@type": "Offer",
            "url": `${siteUrl}/3bhk-flats-bavdhan`,
            "priceCurrency": "INR",
            "price": "17700000",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-05-13"
          },
          "additionalProperty": [
            { "@type": "PropertyValue", "name": "Structure", "value": "Earthquake Resistant RCC" },
            { "@type": "PropertyValue", "name": "Flooring", "value": "800x800 Vitrified Tiles" },
            { "@type": "PropertyValue", "name": "Security", "value": "3-Tier with Digital Locks" }
          ]
        })}
      </script>

      {/* Real Estate Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": title,
          "description": description,
          "url": fullCanonical,
          "image": ogImage,
          "brand": {
            "@type": "Brand",
            "name": "Goel Ganga Developments",
            "url": "https://goelganga.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sr. No. 34, Bavdhan Budruk",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411021",
            "addressCountry": "IN"
          },
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "12.5 Acre Sports Arena", "value": "true" },
            { "@type": "LocationFeatureSpecification", "name": "Michael Phelps Swimming Academy", "value": "true" },
            { "@type": "LocationFeatureSpecification", "name": "3-tier Security", "value": "true" }
          ]
        })}
      </script>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Goel Ganga Legend County",
          "image": ogImage,
          "@id": `${siteUrl}/#localbusiness`,
          "url": siteUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sr. No. 34, Bavdhan Budruk",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411021",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5126,
            "longitude": 73.7667
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "520"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          }
        })}
      </script>

      {/* FAQ Schema */}
      {faq && faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      )}
    </Helmet>
  );
}
