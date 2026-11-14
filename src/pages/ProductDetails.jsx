
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaStar,
  FaFacebook,
  FaBolt,
} from "react-icons/fa";

import { products } from "../utils/Product.js";

const SITE_URL = "https://fbmverified.com";
const WHATSAPP_NUMBER = "8801831591975";

const formatPrice = (price) =>
  Number(price || 0).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const getProductPrice = (product) => {
  if (typeof product.price === "object" && product.price !== null) {
    return product.price.current ?? product.price.original ?? 0;
  }

  return product.price ?? 0;
};

const formatLabel = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/^./, (character) => character.toUpperCase());

const ProductDetails = () => {
  const { id } = useParams();

  const productList = Object.values(products || {}).filter(
    (item) => item && item.id
  );

  const product = productList.find((item) => item.id === id);

  const relatedProducts = product
    ? productList
        .filter(
          (item) =>
            item.id !== product.id &&
            item.id.includes("whatsapp-api") ===
              product.id.includes("whatsapp-api")
        )
        .slice(0, 4)
    : [];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product Not Found | FBM Verified</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>

        <main className="flex min-h-screen items-center justify-center bg-[#030916] px-4 py-20 text-center text-white">
          <div className="w-full max-w-lg rounded-3xl border border-blue-400/20 bg-[#07152d] p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-3xl text-red-400">
              !
            </div>

            <h1 className="text-3xl font-extrabold">
              Product Not Found
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              The requested product could not be found.
            </p>

            <Link
              to="/pricing"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-bold text-white transition hover:brightness-110"
            >
              <FaArrowLeft />
              Back to Pricing
            </Link>
          </div>
        </main>
      </>
    );
  }

  const price = getProductPrice(product);

  const originalPrice =
    typeof product.price === "object" && product.price !== null
      ? product.price.original
      : null;

  const title = `${product.name} | FBM Verified`;

  const description =
    product.description ||
    `Explore the specifications, features and pricing of ${product.name} from FBM Verified.`;

  const canonicalUrl = `${SITE_URL}/product/${product.id}`;

  const isWhatsAppProduct = product.id.includes("whatsapp-api");

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in ${product.name}. Price: $${formatPrice(
      price
    )} USD. Please share more details.`
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const specifications = product.specs
    ? Object.entries(product.specs).filter(
        ([key, value]) =>
          value !== null &&
          value !== undefined &&
          value !== ""
      )
    : [];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "FBM Verified",
    },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: product.currency || "USD",
      price,
      availability: product.stockStatus
        ?.toLowerCase()
        .includes("out of stock")
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "FBM Verified",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="FBM Verified" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      <main className="relative min-h-screen overflow-hidden bg-[#030916] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8">
        {/* Background Effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] max-w-full -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-[500px] h-72 w-72 rounded-full bg-purple-600/10 blur-[110px]"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500"
          >
            <Link to="/" className="transition hover:text-blue-400">
              Home
            </Link>

            <span>/</span>

            <Link
              to="/pricing"
              className="transition hover:text-blue-400"
            >
              Pricing
            </Link>

            <span>/</span>

            <span className="max-w-[220px] truncate text-gray-300">
              {product.name}
            </span>
          </nav>

          {/* Back Button */}
          <Link
            to="/pricing"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-blue-400"
          >
            <FaArrowLeft />
            Back to All Products
          </Link>

          {/* Main Product Details */}
          <section className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#0b1b3b] via-[#071329] to-[#100b2b] p-5 shadow-2xl sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-purple-600/15 blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Product Overview - No Image */}
              <div className="flex flex-col justify-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-lg">
                  {isWhatsAppProduct ? (
                    <FaWhatsapp className="text-5xl text-emerald-400" />
                  ) : (
                    <FaFacebook className="text-5xl text-blue-400" />
                  )}
                </div>

                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                      isWhatsAppProduct
                        ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"
                        : "border-blue-400/25 bg-blue-500/10 text-blue-300"
                    }`}
                  >
                    {isWhatsAppProduct ? (
                      <FaWhatsapp />
                    ) : (
                      <FaFacebook />
                    )}

                    {isWhatsAppProduct
                      ? "WhatsApp Business API"
                      : "Business Manager Solution"}
                  </span>

                  {product.stockStatus && (
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                      ● {product.stockStatus}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {product.name}
                </h1>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap items-end gap-3">
                  <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    ${formatPrice(price)}
                  </span>

                  {originalPrice &&
                    Number(originalPrice) > Number(price) && (
                      <span className="mb-1 text-xl text-gray-500 line-through">
                        ${formatPrice(originalPrice)}
                      </span>
                    )}

                  <span className="mb-1 rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">
                    {product.currency || "USD"}
                  </span>
                </div>

                {product.rating != null &&
                  Number(product.rating) > 0 && (
                    <div className="mt-5 flex items-center gap-2 text-sm">
                      <span className="flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 py-1.5 font-semibold text-yellow-300">
                        <FaStar />
                        {Number(product.rating).toFixed(2)}
                      </span>

                      {product.ratingCount > 0 && (
                        <span className="text-gray-500">
                          ({product.ratingCount} ratings)
                        </span>
                      )}
                    </div>
                  )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-blue-400/20 bg-blue-500/5 px-3 py-2 text-xs font-semibold text-gray-300">
                    <FaShieldAlt className="text-blue-400" />
                    Product Information
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-lg border border-purple-400/20 bg-purple-500/5 px-3 py-2 text-xs font-semibold text-gray-300">
                    <FaHeadset className="text-purple-400" />
                    Customer Support
                  </span>
                </div>
              </div>

              {/* Order Panel */}
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl border border-blue-400/20 bg-[#07152d]/90 p-6 shadow-xl sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[2px] text-blue-400">
                        Product Summary
                      </p>

                      <h2 className="mt-2 text-xl font-extrabold text-white">
                        Order Information
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-xl text-emerald-400">
                      <FaShieldAlt />
                    </div>
                  </div>

                  <div className="space-y-4 border-y border-blue-300/10 py-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-400">
                        Product
                      </span>

                      <span className="text-right text-sm font-semibold text-white">
                        {product.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-400">
                        Category
                      </span>

                      <span className="text-sm font-semibold text-white">
                        {isWhatsAppProduct ? "WhatsApp API" : "Facebook BM"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-400">
                        Availability
                      </span>

                      <span className="text-right text-sm font-semibold text-emerald-400">
                        {product.stockStatus || "Contact for availability"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-2">
                      <span className="font-semibold text-gray-300">
                        Total Price
                      </span>

                      <span className="text-2xl font-black text-white">
                        ${formatPrice(price)}
                      </span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact us on WhatsApp about ${product.name}`}
                    className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <FaWhatsapp className="text-2xl" />
                    Order via WhatsApp
                    <FaArrowRight className="text-sm" />
                  </a>

                  <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                    Contact us to confirm availability, pricing and delivery
                    details before ordering.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Product Specifications */}
          {specifications.length > 0 && (
            <section className="mt-10 rounded-2xl border border-blue-400/20 bg-[#07152d]/80 p-5 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <FaShieldAlt />
                </span>

                <div>
                  <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                    Product Specifications
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Detailed information about this product.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-blue-300/10">
                {specifications.map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-1 gap-2 border-b border-blue-300/10 px-4 py-4 last:border-b-0 sm:grid-cols-2 sm:gap-4"
                  >
                    <span className="text-sm font-medium text-gray-400">
                      {formatLabel(key)}
                    </span>

                    <span className="break-words text-sm font-semibold text-gray-200 sm:text-right">
                      {Array.isArray(value)
                        ? value.join(", ")
                        : typeof value === "object"
                          ? Object.entries(value)
                              .map(
                                ([option, optionValue]) =>
                                  `${formatLabel(option)}: ${optionValue}`
                              )
                              .join(", ")
                          : String(value)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Features */}
          {product.features?.length > 0 && (
            <section className="mt-10 rounded-2xl border border-blue-400/20 bg-[#07152d]/80 p-5 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400">
                  <FaBolt />
                </span>

                <div>
                  <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                    Key Features
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Important features and benefits.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-blue-300/10 bg-blue-500/5 p-4"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-emerald-400" />

                    <p className="text-sm leading-6 text-gray-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Long Description */}
          {product.longDescription && (
            <section className="mt-10 rounded-2xl border border-blue-400/20 bg-[#07152d]/80 p-5 sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-white">
                Product Details
              </h2>

              <div className="whitespace-pre-line break-words text-sm leading-7 text-gray-400 sm:text-base">
                {product.longDescription}
              </div>
            </section>
          )}

          {/* Service Information */}
          <section className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-400/20 bg-[#07152d]/80 p-5 transition hover:border-blue-400/50">
              <FaShieldAlt className="mb-4 text-2xl text-blue-400" />

              <h3 className="font-bold text-white">
                Product Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Review product specifications before ordering.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-[#07152d]/80 p-5 transition hover:border-blue-400/50">
              <FaTruck className="mb-4 text-2xl text-cyan-400" />

              <h3 className="font-bold text-white">
                Delivery Details
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Confirm delivery arrangements with our team.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-[#07152d]/80 p-5 transition hover:border-blue-400/50">
              <FaHeadset className="mb-4 text-2xl text-purple-400" />

              <h3 className="font-bold text-white">
                Customer Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Contact us for product-related questions.
              </p>
            </div>
          </section>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-14">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-blue-400">
                    Explore More
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Related Products
                  </h2>
                </div>

                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  View All <FaArrowRight />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="group flex flex-col rounded-2xl border border-blue-400/20 bg-[#07152d]/90 p-5 transition hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-[0_0_25px_rgba(37,99,235,0.12)]"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-400">
                      {isWhatsAppProduct ? (
                        <FaWhatsapp />
                      ) : (
                        <FaFacebook />
                      )}
                    </div>

                    <h3 className="min-h-12 font-bold leading-6 text-white transition group-hover:text-blue-300">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-2xl font-extrabold text-white">
                      ${formatPrice(getProductPrice(item))}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-400">
                      View Details
                      <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Navigation */}
          <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-blue-300/10 pt-8 sm:flex-row">
            <p className="text-center text-sm text-gray-500 sm:text-left">
              FBM Verified — Product information and pricing.
            </p>

            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-3 text-sm font-bold text-blue-300 transition hover:bg-blue-500/20"
            >
              <FaArrowLeft />
              Back to Pricing
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
