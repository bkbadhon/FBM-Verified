import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
} from "react-icons/fa";
import { services } from "../utils/Services";

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#030916] px-4 text-center">
        <h1 className="text-3xl font-bold text-white">
          Service Not Found
        </h1>
        <p className="mt-3 text-slate-400">
          The service you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const Icon = service.icon;
  const canonicalUrl = `https://fbmverified.com/services/${service.slug}`;

  const whatsappLink =
    "https://wa.me/8801831591975?text=" +
    encodeURIComponent(
      `Hello FBM Verified, I am interested in your ${service.title} service.`
    );

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>

        <meta
          name="description"
          content={service.metaDescription}
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={service.metaTitle} />
        <meta
          property="og:description"
          content={service.metaDescription}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="FBM Verified" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta
          name="twitter:description"
          content={service.metaDescription}
        />
      </Helmet>

      <main className="min-h-screen overflow-hidden bg-[#030916] text-white">

        {/* Hero */}
        <section className="relative px-4 py-20 md:px-8 md:py-28">
          <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-3xl">

              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
                <FaShieldAlt className="text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  FBM Verified Services
                </span>
              </div>

              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-lg shadow-blue-500/10">
                <Icon className="text-3xl text-cyan-400" />
              </div>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                {service.heading}
                <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  FBM Verified
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                {service.intro}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:shadow-blue-500/30"
                >
                  <FaWhatsapp className="text-xl" />
                  Get Started
                  <FaArrowRight />
                </a>

                <Link
                  to="/bm-solutions"
                  className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 pb-20 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                What We Offer
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Professional Support for Your Business
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                FBM Verified helps businesses understand and organize their
                Meta business assets with practical setup guidance and
                support.
              </p>
            </div>

            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-[#0b1b38] to-[#071329] p-5 transition hover:border-cyan-400/30"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-lg text-cyan-400" />
                  <p className="text-sm leading-7 text-slate-300 md:text-base">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Process */}
        <section className="border-y border-white/5 bg-[#071329]/70 px-4 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">

            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">
                How It Works
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Our Working Process
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                A simple step-by-step approach to help you with your business
                requirements.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#0b1b38] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 font-extrabold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="leading-7 text-slate-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 md:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-[#0b1b38] to-purple-600/20 px-6 py-12 text-center md:px-12 md:py-16">

            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Need Help With {service.title}?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Contact FBM Verified to discuss your requirements and find the
              right solution for your business.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-green-400"
            >
              <FaWhatsapp className="text-xl" />
              Contact on WhatsApp
              <FaArrowRight />
            </a>

          </div>
        </section>

      </main>
    </>
  );
};

export default ServiceDetails;