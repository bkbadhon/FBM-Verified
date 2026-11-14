
import React from "react";
import { Helmet } from "react-helmet-async";

import Banner from "./Banner";
import Service from "./Service";
import Testimonial from "./Testimonial";
import OurService from "./OurService";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const socialLinks = [
    "https://www.facebook.com/fbmverified",
    "https://www.instagram.com/fbmverified",
    "https://www.linkedin.com/groups/40993029",
    "https://t.me/fbmverified",
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://fbmverified.com/#organization",
    name: "FBM Verified",
    url: "https://fbmverified.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://fbmverified.com/logo.png",
    },
    description:
      "FBM Verified provides Facebook Business Manager solutions and WhatsApp Business API services for businesses worldwide.",
    sameAs: socialLinks,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://fbmverified.com/#website",
    name: "FBM Verified",
    url: "https://fbmverified.com/",
    publisher: {
      "@id": "https://fbmverified.com/#organization",
    },
    inLanguage: "en",
  };

  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Facebook Business Manager & WhatsApp API Solutions | FBM Verified
        </title>

        <meta
          name="description"
          content="Discover Facebook Business Manager solutions and approved WhatsApp Business API services at FBM Verified. Explore business solutions and worldwide support."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://fbmverified.com/"
        />

        {/* International SEO */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://fbmverified.com/"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://fbmverified.com/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FBM Verified" />

        <meta
          property="og:title"
          content="Facebook Business Manager & WhatsApp API Solutions | FBM Verified"
        />

        <meta
          property="og:description"
          content="Explore Facebook Business Manager solutions and WhatsApp Business API services at FBM Verified."
        />

        <meta
          property="og:url"
          content="https://fbmverified.com/"
        />

        <meta
          property="og:image"
          content="https://fbmverified.com/og.jpg"
        />

        <meta
          property="og:image:alt"
          content="FBM Verified - Business Manager and WhatsApp API Solutions"
        />

        <meta property="og:locale" content="en_US" />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="FBM Verified | Business Solutions Worldwide"
        />

        <meta
          name="twitter:description"
          content="Facebook Business Manager and WhatsApp Business API solutions for businesses worldwide."
        />

        <meta
          name="twitter:image"
          content="https://fbmverified.com/og.jpg"
        />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      <Banner />
      <OurService />
      <WhyChooseUs />
      <Service />
      <Testimonial />
    </div>
  );
};

export default Home;
