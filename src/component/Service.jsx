
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaTachometerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import service1 from "../assets/s1.png";
import service2 from "../assets/s2.png";
import service3 from "../assets/s3.png";

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(4);

  const proofs = [
    {
      id: 1,
      image: service1,
      title: "Facebook Business Manager",
      description: "Verified BM with $250 Spending Limit",
      badge: "Premium Account",
    },
    {
      id: 2,
      image: service2,
      title: "Facebook Business Manager",
      description: "Verified BM with $1000 Spending Limit",
      badge: "Business Plus",
    },
    {
      id: 3,
      image: service3,
      title: "Facebook Business Manager",
      description: "Verified BM with $5000 Spending Limit",
      badge: "Agency Account",
    },
    {
      id: 4,
      image: service3,
      title: "Facebook Business Manager",
      description: "Verified BM with Unlimited Spending",
      badge: "Enterprise",
    },
    {
      id: 5,
      image: service1,
      title: "Facebook Business Manager",
      description: "Verified BM with Old Account (2018)",
      badge: "Legacy Account",
    },
    {
      id: 6,
      image: service1,
      title: "Facebook Business Manager",
      description: "Verified BM with Phone Verified",
      badge: "Secure Plus",
    },
    {
      id: 7,
      image: service2,
      title: "Facebook Business Manager",
      description: "Verified BM with Email Verified",
      badge: "Standard",
    },
    {
      id: 8,
      image: service3,
      title: "Facebook Business Manager",
      description: "Verified BM with Document Verified",
      badge: "Trusted",
    },
    {
      id: 9,
      image: service2,
      title: "Facebook Business Manager",
      description: "Verified BM with High Spending Limit",
      badge: "VIP Account",
    },
    {
      id: 10,
      image: service1,
      title: "Facebook Business Manager",
      description: "Verified BM with 2FA Enabled",
      badge: "Secure",
    },
  ];

  // Responsive items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(proofs.length / itemsToShow);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, totalSlides - 1));
  }, [totalSlides]);

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const goToPrevious = () => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    pauseAutoPlay();
    setCurrentIndex(index);
  };

  const getVisibleItems = () => {
    const start = currentIndex * itemsToShow;
    return proofs.slice(start, start + itemsToShow);
  };

  return (
    <>
      <Helmet>
        <title>
          Facebook Business Manager Proofs | FBM Verified Portfolio
        </title>

        <meta
          name="description"
          content="Explore Facebook Business Manager account proofs and available account options from FBM Verified. View account details and spending limit examples."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://fbmverified.com/proofs"
        />

        <meta
          property="og:title"
          content="Facebook Business Manager Proofs | FBM Verified"
        />
        <meta
          property="og:description"
          content="Explore Facebook Business Manager account proofs and available account options from FBM Verified."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://fbmverified.com/proofs"
        />
        <meta
          property="og:site_name"
          content="FBM Verified"
        />
      </Helmet>

      <div className="min-h-screen overflow-hidden bg-[#030916] px-4 py-16 text-white md:px-8 md:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-14 text-center md:mb-16">

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-[#07152d] px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
                Our Portfolio
              </span>
            </div>

            <h1 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              <span className="text-white">FBM Verified</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Facebook Business Manager Proofs
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              Explore our Facebook Business Manager account portfolio
              and available account options.
            </p>

            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          </div>

          {/* Stats */}
          <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">

            {[
              {
                icon: <MdVerified />,
                value: "500+",
                label: "Happy Clients",
              },
              {
                icon: <FaShieldAlt />,
                value: "100%",
                label: "Verified Accounts",
              },
              {
                icon: <FaClock />,
                value: "24/7",
                label: "Support Ready",
              },
              {
                icon: <FaTachometerAlt />,
                value: "$50-∞",
                label: "Spending Limit",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#0b1b38] to-[#07152d] p-5 text-center shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-900/10"
              >
                <div className="mb-3 text-3xl text-cyan-400 transition group-hover:scale-110">
                  {stat.icon}
                </div>

                <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                  {stat.value}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-400 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

          {/* Portfolio Heading */}
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Account Portfolio
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Explore available account examples
              </p>
            </div>

            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-300">
              {proofs.length} Portfolio Items
            </div>
          </div>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >

            {/* Navigation */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  aria-label="Previous slide"
                  className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-blue-400/30 bg-[#102447] p-3 text-white shadow-xl transition hover:scale-110 hover:border-cyan-400 hover:bg-blue-600 md:-left-5"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={goToNext}
                  aria-label="Next slide"
                  className="absolute -right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-blue-400/30 bg-[#102447] p-3 text-white shadow-xl transition hover:scale-110 hover:border-cyan-400 hover:bg-blue-600 md:-right-5"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            {/* Cards */}
            <div className="overflow-hidden px-2 py-4 md:px-3">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {getVisibleItems().map((proof) => (
                  <div
                    key={proof.id}
                    className="group relative overflow-hidden rounded-2xl border border-blue-400/15 bg-gradient-to-b from-[#0b1b38] to-[#071329] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-950/30"
                  >

                    {/* Badge */}
                    <div className="absolute right-3 top-3 z-10">
                      <span className="rounded-full border border-cyan-300/30 bg-[#06152c]/90 px-3 py-1.5 text-[10px] font-bold tracking-wide text-cyan-300 shadow-lg backdrop-blur-md">
                        {proof.badge}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden border-b border-blue-400/10 bg-[#030916] md:h-56">

                      <img
                        src={proof.image}
                        alt={`${proof.title} - ${proof.description}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#030916]/90 via-transparent to-transparent opacity-70" />

                      <div className="absolute inset-0 flex items-center justify-center bg-[#030916]/75 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="text-center">
                          <FaCheckCircle className="mx-auto mb-2 text-4xl text-cyan-400" />
                          <span className="text-sm font-semibold text-white">
                            Account Proof
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">

                      <div className="mb-3 flex items-center gap-2">
                        <MdVerified className="shrink-0 text-lg text-cyan-400" />

                        <h3 className="text-sm font-bold leading-5 text-white">
                          {proof.title}
                        </h3>
                      </div>

                      <p className="border-t border-blue-400/10 pt-3 text-xs leading-6 text-slate-400">
                        {proof.description}
                      </p>

                    </div>

                    <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-50 transition group-hover:opacity-100" />

                  </div>
                ))}

              </div>
            </div>

            {/* Pagination */}
            {totalSlides > 1 && (
              <div className="mt-8 flex justify-center gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={currentIndex === index ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-9 bg-gradient-to-r from-cyan-400 to-blue-500"
                        : "w-2.5 bg-slate-600 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            )}

          </div>

          {/* Bottom Information */}
          <div className="mt-16 border-t border-blue-400/15 pt-10">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

              <div className="rounded-2xl border border-blue-400/15 bg-[#07152d] p-6 transition hover:border-cyan-400/30">
                <div className="mb-3 text-2xl text-cyan-400">
                  <FaTachometerAlt />
                </div>
                <h3 className="mb-3 font-bold text-white">
                  Available Spending Limits
                </h3>
                <p className="text-sm leading-6 text-slate-400">
                  $250 | $1,000 | $5,000 | Unlimited
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/15 bg-[#07152d] p-6 transition hover:border-cyan-400/30">
                <div className="mb-3 text-2xl text-cyan-400">
                  <FaShieldAlt />
                </div>
                <h3 className="mb-3 font-bold text-white">
                  Account Types
                </h3>
                <p className="text-sm leading-6 text-slate-400">
                  Premium | Business Plus | Agency | Enterprise
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/15 bg-[#07152d] p-6 transition hover:border-cyan-400/30">
                <div className="mb-3 text-2xl text-cyan-400">
                  <MdVerified />
                </div>
                <h3 className="mb-3 font-bold text-white">
                  Verification Status
                </h3>
                <p className="text-sm leading-6 text-slate-400">
                  Account verification details and available proofs
                </p>
              </div>

            </div>

            <div className="mt-10 text-center">
              <p className="text-sm font-medium text-slate-400">
                <span className="text-cyan-400">
                  Serving customers worldwide:
                </span>{" "}
                USA 🇺🇸 | Canada 🇨🇦 | Nigeria 🇳🇬 | Australia 🇦🇺
              </p>

              <p className="mt-4 text-xs text-slate-600">
                © 2026 FBM Verified. All rights reserved.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Service;
