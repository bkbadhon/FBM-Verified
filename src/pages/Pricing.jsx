
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaCheck,
  FaArrowRight,
  FaShieldAlt,
  FaWhatsapp,
  FaFacebook,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

import { products } from "../utils/Product";

const SITE_URL = "https://fbmverified.com";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("bm");

  const productList = Object.values(products || {}).filter(
    (product) => product && product.id
  );

  const bmProducts = productList.filter(
    (product) => !product.id.toLowerCase().includes("whatsapp-api")
  );

  const whatsappProducts = productList.filter((product) =>
    product.id.toLowerCase().includes("whatsapp-api")
  );

  const getPrice = (product) => {
    if (typeof product.price === "object" && product.price !== null) {
      return product.price.current ?? product.price.original ?? 0;
    }

    return product.price ?? 0;
  };

  const getOriginalPrice = (product) => {
    if (typeof product.price === "object" && product.price !== null) {
      return product.price.original ?? null;
    }

    return null;
  };

  const formatPrice = (price) => {
    const number = Number(price);

    if (!Number.isFinite(number)) return "0";

    return number.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  const formatLabel = (key) =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/[_-]/g, " ")
      .replace(/^./, (char) => char.toUpperCase());

  const formatValue = (value) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    }

    if (typeof value === "object" && value !== null) {
      return Object.entries(value)
        .map(([key, val]) => `${formatLabel(key)}: ${val}`)
        .join(", ");
    }

    return String(value);
  };

  // Product Card
  const ProductCard = ({ product, index, category }) => {
    const price = getPrice(product);
    const originalPrice = getOriginalPrice(product);

    const isPopular = category === "bm" && index === 1;

    const specifications = product.specs
      ? Object.entries(product.specs)
          .filter(
            ([key, value]) =>
              value !== null &&
              value !== undefined &&
              value !== "" &&
              key !== "conversationLimitOptions"
          )
          .slice(0, 4)
      : [];

    return (
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-[#07152d]/90 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:shadow-[0_0_30px_rgba(37,99,235,0.16)] ${
          isPopular
            ? "border-purple-500/60 shadow-[0_0_24px_rgba(139,92,246,0.10)]"
            : "border-blue-400/20"
        }`}
      >
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400" />

        {isPopular && (
          <span className="absolute right-3 top-4 z-10 rounded-full border border-purple-400/30 bg-purple-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-purple-300">
            Most Popular
          </span>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex items-center gap-2">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                category === "bm"
                  ? "border-blue-400/20 bg-blue-500/10 text-blue-400"
                  : "border-green-400/20 bg-green-500/10 text-green-400"
              }`}
            >
              {category === "bm" ? (
                <FaFacebook className="text-lg" />
              ) : (
                <FaWhatsapp className="text-xl" />
              )}
            </span>

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {category === "bm" ? "BM Solution" : "WhatsApp API"}
            </span>
          </div>

          <h3 className="mb-2 min-h-12 text-lg font-extrabold leading-6 text-white">
            {product.name}
          </h3>

          <div className="mb-2 flex flex-wrap items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-white">
              ${formatPrice(price)}
            </span>

            {originalPrice !== null &&
              originalPrice !== undefined &&
              Number(originalPrice) > Number(price) && (
                <span className="text-sm text-gray-500 line-through">
                  ${formatPrice(originalPrice)}
                </span>
              )}

            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
              USD
            </span>
          </div>

          {product.stockStatus && (
            <p className="mb-3 text-xs text-emerald-400">
              <span className="mr-1">●</span>
              {product.stockStatus}
            </p>
          )}

          <div className="mb-5 mt-3 flex-1 space-y-3 border-y border-blue-300/10 py-4">
            {specifications.length > 0 ? (
              specifications.map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start gap-2 text-sm leading-5 text-gray-300"
                >
                  <FaCheck className="mt-1 shrink-0 text-cyan-400" />

                  <span className="break-words">
                    <span className="text-gray-400">
                      {formatLabel(key)}:
                    </span>{" "}
                    {formatValue(value)}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">
                View product details for more information.
              </p>
            )}
          </div>

          <Link
            to={`/product/${product.id}`}
            aria-label={`View details for ${product.name}`}
            className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              isPopular
                ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-900/20"
                : category === "whatsapp"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-500"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600"
            }`}
          >
            Get Started
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    );
  };

  // Product Section
  const ProductSection = ({
    title,
    subtitle,
    items,
    category,
    icon,
    sectionId,
    className = "mb-10",
  }) => (
    <section aria-labelledby={sectionId} className={className}>
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
              {icon}
            </span>

            <h2
              id={sectionId}
              className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
            >
              {title}
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            {subtitle}
          </p>
        </div>

        <span className="w-fit rounded-full border border-blue-400/20 bg-blue-500/5 px-3 py-1.5 text-xs font-semibold text-blue-300">
          {items.length} {items.length === 1 ? "Product" : "Products"}
        </span>
      </div>

      {items.length > 0 ? (
        <div
          className={`grid grid-cols-1 items-stretch gap-5 ${
            items.length <= 2
              ? "sm:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {items.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              category={category}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-[#07152d]/70 p-8 text-center">
          <p className="text-sm text-gray-400">
            No products available in this category.
          </p>
        </div>
      )}
    </section>
  );

  // Why Choose Us
  const WhyChooseUs = () => (
    <section className="flex h-full flex-col justify-center rounded-2xl border border-blue-400/20 bg-[#07152d]/90 p-6 lg:p-7">
      <h2 className="mb-6 text-xl font-extrabold text-white">
        Why Choose FBM Verified?
      </h2>

      <div className="space-y-5">
        {[
          "Reliable Solutions",
          "Fast Delivery",
          "Customer Support",
          "Competitive Pricing",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm font-semibold text-gray-300"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <FaCheck />
            </span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );

  // Secondary Products + Why Choose Us
  const SecondarySection = ({
    title,
    subtitle,
    items,
    category,
    icon,
    sectionId,
  }) => {
    if (!items.length) return null;

    return (
      <div className="mb-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProductSection
            title={title}
            subtitle={subtitle}
            items={items}
            category={category}
            icon={icon}
            sectionId={sectionId}
            className="mb-0"
          />
        </div>

        <WhyChooseUs />
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Plans | FBM Verified</title>

        <meta
          name="description"
          content="Explore FBM Verified pricing for Facebook Business Manager solutions and WhatsApp Business API packages. Compare available products and features."
        />

        <link rel="canonical" href={`${SITE_URL}/pricing`} />

        <meta
          property="og:title"
          content="Pricing & Plans | FBM Verified"
        />

        <meta
          property="og:description"
          content="Compare Facebook Business Manager solutions and WhatsApp Business API packages from FBM Verified."
        />

        <meta property="og:url" content={`${SITE_URL}/pricing`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-[#030916] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] max-w-full -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* HERO SECTION */}
          <header className="relative mb-14 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#0b1b3b] via-[#071329] to-[#100b2b] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-blue-500/15 blur-[90px]"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
                  <FaShieldAlt />
                  Simple & Transparent Pricing
                </div>

                <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Choose the Right Plan

                  <span className="mt-2 block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    for Your Business
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                  Explore our Facebook Business Manager solutions and WhatsApp API packages. Compare available features and pricing to find the right solution for your business.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("bm")}
                    aria-pressed={activeTab === "bm"}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                      activeTab === "bm"
                        ? "border-purple-400/50 bg-purple-500/25 text-purple-200 shadow-lg shadow-purple-900/30"
                        : "border-purple-400/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
                    }`}
                  >
                    <FaFacebook />
                    FBM Solutions
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("whatsapp")}
                    aria-pressed={activeTab === "whatsapp"}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                      activeTab === "whatsapp"
                        ? "border-emerald-400/50 bg-emerald-500/25 text-emerald-200 shadow-lg shadow-emerald-900/30"
                        : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                    }`}
                  >
                    <FaWhatsapp />
                    WhatsApp API
                  </button>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-gray-300 sm:text-sm">
                  <span className="flex items-center gap-2">
                    <FaCheck className="text-cyan-400" />
                    Transparent Pricing
                  </span>

                  <span className="flex items-center gap-2">
                    <FaBolt className="text-purple-400" />
                    Multiple Solutions
                  </span>

                  <span className="flex items-center gap-2">
                    <FaHeadset className="text-blue-400" />
                    Customer Support
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE - SVG ILLUSTRATION */}
              <div className="relative mx-auto w-full max-w-[490px]">
                <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[90px]" />

                <div className="relative rounded-3xl border border-blue-400/20 bg-[#07152d]/70 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[3px] text-blue-400">
                        FBM VERIFIED
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold text-white">
                        Business Solutions
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-400">
                      <FaFacebook />
                    </div>
                  </div>

                  <svg
                    viewBox="0 0 440 260"
                    className="w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="FBM Verified business management illustration"
                  >
                    <defs>
                      <linearGradient
                        id="fbmGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#9333EA" />
                      </linearGradient>

                      <linearGradient
                        id="fbmCard"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop stopColor="#142F60" />
                        <stop offset="1" stopColor="#10162E" />
                      </linearGradient>
                    </defs>

                    <rect
                      x="45"
                      y="25"
                      width="350"
                      height="210"
                      rx="18"
                      fill="url(#fbmCard)"
                      stroke="#3B82F6"
                      strokeOpacity=".35"
                    />

                    <rect
                      x="45"
                      y="25"
                      width="350"
                      height="37"
                      rx="18"
                      fill="#1E3A70"
                    />

                    <circle cx="65" cy="43" r="4" fill="#F87171" />
                    <circle cx="79" cy="43" r="4" fill="#FBBF24" />
                    <circle cx="93" cy="43" r="4" fill="#34D399" />

                    <rect
                      x="67"
                      y="82"
                      width="135"
                      height="12"
                      rx="6"
                      fill="#60A5FA"
                    />

                    <rect
                      x="67"
                      y="103"
                      width="95"
                      height="7"
                      rx="3.5"
                      fill="#64748B"
                    />

                    <rect
                      x="67"
                      y="130"
                      width="145"
                      height="78"
                      rx="12"
                      fill="#1E3A70"
                      stroke="#3B82F6"
                      strokeOpacity=".3"
                    />

                    <rect x="84" y="183" width="12" height="13" rx="3" fill="#3B82F6" />
                    <rect x="104" y="167" width="12" height="29" rx="3" fill="#6366F1" />
                    <rect x="124" y="151" width="12" height="45" rx="3" fill="#8B5CF6" />
                    <rect x="144" y="160" width="12" height="36" rx="3" fill="#60A5FA" />
                    <rect x="164" y="143" width="12" height="53" rx="3" fill="#38BDF8" />

                    <rect
                      x="230"
                      y="82"
                      width="140"
                      height="126"
                      rx="13"
                      fill="#101F40"
                      stroke="#3B82F6"
                      strokeOpacity=".3"
                    />

                    <circle
                      cx="300"
                      cy="125"
                      r="25"
                      fill="#2563EB"
                      fillOpacity=".15"
                      stroke="#60A5FA"
                      strokeWidth="2"
                    />

                    <path
                      d="M288 125L296 133L313 115"
                      stroke="#4ADE80"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <rect
                      x="262"
                      y="164"
                      width="76"
                      height="7"
                      rx="3.5"
                      fill="#64748B"
                    />

                    <rect
                      x="275"
                      y="179"
                      width="50"
                      height="6"
                      rx="3"
                      fill="#3B82F6"
                    />

                    <circle cx="365" cy="60" r="31" fill="#1D4ED8" />

                    <path
                      d="M365 42L382 49V60C382 72 375 81 365 85C355 81 348 72 348 60V49L365 42Z"
                      fill="url(#fbmGradient)"
                      stroke="#BFDBFE"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M357 61L363 67L374 55"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <circle cx="22" cy="100" r="5" fill="#60A5FA" />
                    <circle cx="420" cy="170" r="6" fill="#A78BFA" />
                    <circle cx="25" cy="210" r="3" fill="#38BDF8" />
                  </svg>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 p-3">
                      <div className="mb-2 flex items-center gap-2 text-blue-400">
                        <FaFacebook />
                        <span className="text-xs font-semibold">
                          FBM Solutions
                        </span>
                      </div>

                      <p className="text-sm font-bold text-white">
                        Business Management
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-3">
                      <div className="mb-2 flex items-center gap-2 text-emerald-400">
                        <FaWhatsapp />
                        <span className="text-xs font-semibold">
                          WhatsApp API
                        </span>
                      </div>

                      <p className="text-sm font-bold text-white">
                        Business Messaging
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-gray-400">
                    <FaShieldAlt className="text-emerald-400" />
                    Professional Business Solutions
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* PRODUCT SECTIONS */}
          {activeTab === "bm" ? (
            <>
              <ProductSection
                title="Facebook BM Solutions"
                subtitle="Explore our available Facebook Business Manager solutions and compare their specifications and prices."
                items={bmProducts}
                category="bm"
                icon={<FaFacebook />}
                sectionId="bm-products-heading"
              />

              <SecondarySection
                title="WhatsApp API Packages"
                subtitle="Explore our featured WhatsApp Business API packages, including 250 and 2000 API options."
                items={whatsappProducts.slice(0, 2)}
                category="whatsapp"
                icon={<FaWhatsapp />}
                sectionId="whatsapp-products-heading"
              />
            </>
          ) : (
            <>
              <ProductSection
                title="WhatsApp API Packages"
                subtitle="Explore all available WhatsApp Business API packages and compare their specifications and prices."
                items={whatsappProducts}
                category="whatsapp"
                icon={<FaWhatsapp />}
                sectionId="whatsapp-products-heading"
              />

              <SecondarySection
                title="Facebook BM Solutions"
                subtitle="Explore our featured Facebook Business Manager solutions."
                items={bmProducts.slice(0, 2)}
                category="bm"
                icon={<FaFacebook />}
                sectionId="bm-products-heading"
              />
            </>
          )}

          {/* HELP SECTION */}
          <section className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-r from-[#0b1b3b] via-[#0b1430] to-[#160d30] p-7 text-center sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[70px]"
            />

            <div className="relative">
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-300">
                <FaHeadset />
              </span>

              <h2 className="text-xl font-extrabold sm:text-2xl">
                Need Help Choosing a Product?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                Review a product's details or contact our team if you need help understanding the available options.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm font-bold text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/20"
              >
                Contact Us
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Pricing;
