
import React from "react";
import {
  FaShieldAlt,
  FaGlobe,
  FaBolt,
  FaHeadset,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaFacebook,
  FaChartLine,
  FaCrown,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { products } from "../utils/Product.js";

const OurService = () => {
  const whatsappNumber = "8801831591975";

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Verified Business Manager",
      desc: "Professional business verification guidance.",
      color: "text-blue-600",
    },
    {
      icon: <FaGlobe />,
      title: "Global Access",
      desc: "Business solutions for clients worldwide.",
      color: "text-blue-600",
    },
    {
      icon: <FaBolt />,
      title: "Fast Delivery",
      desc: "Efficient service and responsive support.",
      color: "text-amber-500",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Assistance whenever you need help.",
      color: "text-purple-600",
    },
    {
      icon: <FaUsers />,
      title: "Trusted by Clients",
      desc: "Focused on long-term relationships.",
      color: "text-blue-600",
    },
    {
      icon: <FaCrown />,
      title: "Long-Term Partnership",
      desc: "Solutions designed around your goals.",
      color: "text-pink-500",
    },
  ];

  // Product.js থেকে সব products নেওয়া
  const productList = Object.entries(products).map(([id, product]) => ({
    ...product,
    id,
  }));

  // BM এবং WhatsApp products আলাদা করা
  const bmProducts = productList.filter(
    (product) => !product.id.toLowerCase().includes("whatsapp")
  );

  const whatsappProducts = productList.filter(
    (product) => product.id.toLowerCase().includes("whatsapp")
  );

  // Product.js থেকে price নেওয়া
  const getPrice = (product) => {
    if (typeof product.price === "object" && product.price !== null) {
      return Number(
        product.price.current ?? product.price.original ?? 0
      );
    }

    return Number(product.price ?? 0);
  };

  const formatPrice = (price) =>
    Number(price).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

  // Product.js থেকে features/specifications নেওয়া
  const getProductFeatures = (product) => {
    if (Array.isArray(product.features) && product.features.length > 0) {
      return product.features.slice(0, 3);
    }

    if (
      product.specs &&
      typeof product.specs === "object" &&
      !Array.isArray(product.specs)
    ) {
      return Object.entries(product.specs)
        .slice(0, 3)
        .map(([key, value]) => `${key}: ${value}`);
    }

    return [
      "Business Management Solution",
      "Dedicated Support",
    ];
  };

  const planStyles = [
    {
      color: "from-blue-500 to-blue-700",
      border: "border-blue-500/30",
      icon: <FaFacebook />,
    },
    {
      color: "from-purple-500 to-fuchsia-600",
      border: "border-purple-500/40",
      icon: <FaChartLine />,
      popular: true,
    },
    {
      color: "from-emerald-400 to-teal-600",
      border: "border-emerald-400/30",
      icon: <FaShieldAlt />,
    },
    {
      color: "from-orange-400 to-amber-600",
      border: "border-orange-400/30",
      icon: <FaCrown />,
    },
  ];

  // WhatsApp API products থেকে lowest price বের করা
  const whatsappStartingPrice =
    whatsappProducts.length > 0
      ? Math.min(...whatsappProducts.map(getPrice))
      : null;

  return (
    <>
      {/* Feature Strip */}
      <section className="relative z-10 border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-8 px-5 py-9 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:gap-5 lg:py-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center text-center"
            >
              <div
                className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-xl shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xs font-bold text-slate-800 sm:text-sm">
                {feature.title}
              </h3>

              <p className="mt-1.5 max-w-40 text-[11px] leading-5 text-slate-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BM Solutions & Pricing */}
      <section className="relative isolate overflow-hidden bg-[#030817] text-white">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]" />
          <div className="absolute -right-20 top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-[110px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-8 lg:py-20">
          {/* Section Heading */}
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-400">
                <HiSparkles className="text-base" />
                Facebook Business Manager Solutions
              </div>

              <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Choose Your Perfect{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  BM Solution
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Explore business management solutions tailored to your
                requirements, with clear pricing and dedicated support.
              </p>
            </div>

            <a
              href="/pricing"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
            >
              View All Plans <FaArrowRight />
            </a>
          </div>

          {/* Dynamic BM Pricing Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bmProducts.map((product, index) => {
              const style = planStyles[index % planStyles.length];
              const price = getPrice(product);

              const originalPrice =
                typeof product.price === "object" && product.price !== null
                  ? product.price.original
                  : null;

              const message = `Hi, I'm interested in ${product.name} priced at $${formatPrice(price)}. Please share more details.`;

              return (
                <article
                  key={product.id}
                  className={`relative flex flex-col rounded-2xl border ${style.border} bg-gradient-to-b from-[#101b35] to-[#080e20] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.10)]`}
                >
                  {style.popular && (
                    <span className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-lg">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        {product.stockStatus || "Business Solution"}
                      </p>
                    </div>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${style.color} text-lg text-white shadow-lg`}
                    >
                      {style.icon}
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-400">
                    Facebook Business Manager Solution
                  </p>

                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <span className="text-3xl font-extrabold tracking-tight text-white">
                      ${formatPrice(price)}
                    </span>

                    {originalPrice &&
                      Number(originalPrice) > price && (
                        <span className="text-sm text-slate-500 line-through">
                          ${formatPrice(originalPrice)}
                        </span>
                      )}

                    <span className="text-xs text-slate-500">USD</span>
                  </div>

                  <div className="my-5 h-px bg-white/10" />

                  <ul className="flex-1 space-y-3">
                    {getProductFeatures(product).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${style.color} px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110`}
                  >
                    Get Started <FaArrowRight />
                  </a>
                </article>
              );
            })}
          </div>

          {/* WhatsApp API Banner */}
          {whatsappProducts.length > 0 && (
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-r from-[#062c2b] via-[#07302e] to-[#08172b] p-5 sm:p-7">
              <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full bg-emerald-400/10 blur-[70px]" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-500/15 text-3xl text-emerald-400">
                    <FaWhatsapp />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
                      Business Messaging Solutions
                    </span>

                    <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">
                      WhatsApp API Solutions
                    </h3>

                    <p className="mt-2 max-w-xl text-xs leading-6 text-slate-300 sm:text-sm">
                      Explore WhatsApp Business Platform setup, messaging
                      solutions, and onboarding assistance for your business.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
                        <FaCheckCircle className="text-emerald-400" />
                        Setup Assistance
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
                        <FaCheckCircle className="text-emerald-400" />
                        Business Support
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-3 lg:flex-col lg:items-end">
                  <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-xs text-slate-400">
                      Starting from
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-white">
                      ${formatPrice(whatsappStartingPrice)}
                    </p>

                    <p className="text-[10px] text-slate-500">
                      USD
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      "Hi, I want to know more about WhatsApp API solutions."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-xs font-bold text-white transition hover:bg-emerald-400"
                  >
                    <FaWhatsapp className="text-lg" />
                    View Details <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OurService;